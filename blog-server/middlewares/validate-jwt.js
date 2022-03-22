const { response } = require("express")
const jsonwebtoken = require("jsonwebtoken")

const validateJWT = (req, res = response, next) => {
    try {
        const header = req.header('x-token')
        if(!header){
            return res.status(400).json({
                ok:false,
                msg:'There is not token header'
            })
        }
        const payload = jsonwebtoken.verify(header, process.env.JWT_KEY)
        req.uid = payload.uid
        next()
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token is not valid'
        })
    }

}
module.exports = {
    validateJWT
}