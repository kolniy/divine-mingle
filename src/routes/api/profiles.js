import express from "express"
import { body, validationResult } from "express-validator"
import gravatar from "gravatar"
import auth from "../../middleware/auth"
import Profile from "../../models/Profiles"
import User from "../../models/Users"

const router = express.Router()

// private route
// route to get user profile
router.get('/me', auth, async ( req, res) => {
    const profile = await Profile.findOne({ user: req.user.id }).populate('user', 'email')
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
        profilecompleted
    } = req.body
  
    const profileObject = {}
    profileObject.user = req.user.id
    if(firstname) profileObject.firstname = firstname
    if(lastname) profileObject.lastname = lastname
    if(username) profileObject.username = username
    if(ethnicity) profileObject.ethnicity = ethnicity
    if(denomination) profileObject.denomination = denomination
    if(interests) {
        profileObject.interests = interests.split(",").map((interest) => interest.trim())
    }
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