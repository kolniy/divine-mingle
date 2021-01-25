import express from "express"
import { body, validationResult } from "express-validator"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../../models/Users"
import auth from "../../middleware/auth"

const router = express.Router()
const tokenSecret = process.env.JWTSECRET

// route to get currently logged in user
router.get('/', auth, async (req, res) => {
    const userId = req.user.id
    const user = await User.findById(userId).select('-password')
    if(!user){
        return res.status(404).json({ errors: [{ msg: "user not found" }] })
    }
    res.json(user)
})

// route to register user
// public
router.post('/', 
body('email', 'please include a valid email').isEmail(),
body('password', 'Please enter a password with 6 or more characters').isLength({ min: 6}),
async (req, res) => {

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }

    const { email, password } = req.body
    try {
        let user = await User.findOne({
            email
        })

        if(user){
            return res.status(400).json({ errors: [{ msg: "user already exist's" }] })
        }
        user = new User({
            email,
            password
        })

        const salt = await bcrypt.genSalt(10) // generate salt for password
        user.password = await bcrypt.hash(password, salt) // use salt to hash password
        await user.save() // save user

        // code to create token payload
        const payload = {
            user : {
                id: user._id
            }
        }

        jwt.sign(payload, tokenSecret, { expiresIn: 360000}, (err, token) => {
            if(err) throw err
            res.json({
                token
            })
        })

    } catch (error) {
        console.error(error)
        res.status(500).send("server error")
    }
})

// route to login user
// public
router.post('/login', 
body('email', 'please include a valid email').isEmail(),
body('password', 'Please enter a password').exists(),
async (req, res) => {

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }

    const { email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if(!user){
            return res.status(400).json({
                errors: [{msg: "invalid credentials"}]
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.status(400).json({
                errors: [{msg: "invalid credentials"}]
            })
        }

        // code to create token payload
        const payload = {
            user : {
                id: user._id
            }
        }

        jwt.sign(payload, tokenSecret, { expiresIn: 360000}, (err, token) => {
            if(err) throw err
            res.json({
                token
            })
        })

    } catch (error) {
        res.status(500).json({
            errors: error
        })
        console.error(error)
    }
})

router.put('/', 
    body('password', 'Please enter a password with 6 or more characters').isLength({ min: 6}),
    auth, 
    async (req, res) => {

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }

    const userId = req.user.id
    const newPassword = req.body.password

    try {
    let user = await User.findById(userId)
    if(!user){
        return res.status(404).json({ errrors : [{msg: "user not found"}] })
    }

    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(newPassword, salt)

    user.password = password
    user.save()
    res.json(user)

    } catch (error) {
        res.status(500).json({
            errors: error
        })
        console.error(error)
    }
})

export default router
