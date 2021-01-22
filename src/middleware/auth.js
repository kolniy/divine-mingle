import jwt from "jsonwebtoken"
const tokenSecret = process.env.JWTSECRET


const auth = (req, res, next) => {
    const token = req.header('x-auth-token')

    if(!token){
        return res.status(401).json({
            msg: "No Token. Authorization Denied"
        })
    }

    try {
        const decoded = jwt.verify(token, tokenSecret)
        req.user = decoded.user
        next()
    } catch (error) {
        res.status(401).json({msg: 'Token is not valid'})
    }
}

export default auth