import express from "express"
import { body, validationResult } from "express-validator"
import auth from "../../middleware/auth"
import Profile from "../../models/Profiles"
import User from "../../models/Users"
import multer from "multer"
import { memoryStorage } from "multer"
import sharp from "sharp"
import dataUri from "../../helpers/dataUri"
import cloudinary from "cloudinary"
import getDistanceFromLatLongInKm from "../../helpers/getDistanceFromLatLongInKm"
import determineMatchingStrength from "../../helpers/determineMatchingStrength"
import sortProfilesByLocation from "../../helpers/sortProfilesByLocation"
import { async } from "regenerator-runtime"

const router = express.Router()

// private route
// route to get user profile
router.get('/me', auth, async ( req, res) => {
    const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['email'])
    if(!profile){
        return res.status(404).json({
            errors: [{ msg: "Profile not found"}]
        })
    }
    res.json(profile)
})

// private route
// route to create or update user profile
router.post('/', [
    auth
], async (req, res) => {

    const { 
        firstname,
        lastname,
        username,
        ethnicity,
        denomination,
        interests,
        profilepic,
        dateofbirth,
        profilecompleted,
        userLocation
    } = req.body
  
    const profileObject = {}
    profileObject.user = req.user.id
    if(firstname) profileObject.firstname = firstname
    if(lastname) profileObject.lastname = lastname
    if(username) profileObject.username = username
    if(ethnicity) profileObject.ethnicity = ethnicity
    if(userLocation) profileObject.userLocation = userLocation
    if(denomination) profileObject.denomination = denomination
    if(interests) profileObject.interests = interests
    if(profilepic)  profileObject.profilepic = profilepic
    if(dateofbirth)  profileObject.dateofbirth = dateofbirth
    if(profilecompleted) profileObject.profilecompleted = profilecompleted

        try {
            let profile = await Profile.findOne({user: req.user.id})
            if(profile){ // if profile alredy exit's update it
                profile = await Profile.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: profileObject },
                    { new: true }
                )
                return res.json(profile)
            }
        
            // else create it
            profile = new Profile(profileObject)
            await profile.save()
            res.json(profile)
        } catch (error) {
        console.error(error.message);
        return res.status(500).send("Server Error");
  }
})

const storageDest = memoryStorage()

const upload = multer({
    storage: storageDest,
    limits: {
        fileSize: 3000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            cb(new Error('Please Upload an image'))
        }
        cb(undefined, true)
    }
})

router.put('/image/upload', [
    auth,
    body('avatar', 'image file not found').not().isEmpty()
],
upload.single('avatar'), 
async (req, res) => {
    const errors = validationResult(req.body)
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }

    try {
        let profile = await Profile.findOne({ user: req.user.id })
        if(!profile){
            return res.status(404).json({
                errors: [{ msg: "Profile not found"}]
            })
         }
        const buffer = await sharp(req.file.buffer) // sharp used to resize images
        .resize({ width:200, height:200})
        .png().toBuffer()

        const profilePictureToUpload = dataUri('.png', buffer).content // data uri used to convert buffer to browser resource e.g image

        let uploadResponse = await cloudinary.v2.uploader.upload(profilePictureToUpload, {
            folder:'Divine Mingle/profile/image',
            public_id:`${profile.username}`
        })

        profile.profilepic = uploadResponse.url
        profile.profilecompleted = true // setting the profile completed to true
        // because this is the last stage of the profile update.
        await profile.save()
        res.json(profile)
    } catch (error) {
        res.status(500).send('server error')
    }

})

router.get('/username', async (req, res) => {
   const usernameQuery = req.query.username
   if(!usernameQuery){
    return res.status(400).json({
        errors: [{
            msg: "username not valid"
        }]
    })
}
    try {
    const profiles = await Profile.find({ username: usernameQuery })
    res.json(profiles)
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
})

router.get('/matches', auth, async (req, res) => {
    try {
        let profileToBeMatched = await Profile.findOne({ user: req.user.id })
        
        if(!profileToBeMatched){
            return res.status(400).json({
                errors: [{
                    msg: "Profile not found"
                }]
            })
        }

     let interestToMatch = profileToBeMatched.interests.map((interest) => interest.interestName)
     let matchedProfiles = await Profile.find({
         'interests.interestName' : { $in: interestToMatch },
         user: { $ne: req.user.id} // get all the matched profiles except profile of the 
         // currently logged in user
     })

     let matchesTobeSent = []
      const { latitude : loggedInUserlat, longitude : loggedInUserLon } = profileToBeMatched.userLocation

     matchedProfiles.forEach((profile) => {
         profile = profile.toObject()  // return a normal mongoose 
         // object with the defined schema fields
        let matchingStrength = determineMatchingStrength(profile, interestToMatch)
        let distanceBetweenUsers = getDistanceFromLatLongInKm(loggedInUserlat, loggedInUserLon, profile.userLocation.latitude, profile.userLocation.longitude)
        let usersProfile = {
            ...profile,
            distance: Math.floor(distanceBetweenUsers),
            matchingCount: matchingStrength
        }
        matchesTobeSent.push(usersProfile)
     })
     
    // return the matched users sorted by the user with the 
    // nearest location
     res.json(sortProfilesByLocation(matchesTobeSent))

    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
})

router.get('/matches/count', auth, async (req, res) => {
    try {
        let profileToBeMatched = await Profile.findOne({ user: req.user.id })
        
        if(!profileToBeMatched){
            return res.status(400).json({
                errors: [{
                    msg: "Profile not found"
                }]
            })
        }

        let interestToMatch = profileToBeMatched.interests.map((interest) => interest.interestName)
        let matchesCount = await Profile.find({
            'interests.interestName' : { $in: interestToMatch },
            user: { $ne: req.user.id} // get all the matched profiles except profile of the 
            // currently logged in user
        })

        res.json({
            matchCount: matchesCount.length
        })

    } catch (error) {
        console.log(error)
        res.status(500).send("server Error")
    }
})

// private route
// route to delete user profile and account
router.delete('/', auth, async (req, res) => {
    try {
    // @todo remove activities from database
    
    // remove profile
        await Profile.findOneAndRemove({ user: req.user.id })
    // remove user
        await User.findOneAndRemove({ _id: req.user.id })

        res.json({
            msg: "user deleted"
        })
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
})

export default router                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           