const { response } = require('express')
const User = require('../models/user')
const bcrypt = require("bcryptjs")
const {generateJWT} = require("../helpers/jwt")

const createUser = async (req, res = response) => {
    try {
 
        const {email, password} = req.body
        const EmailExists = await User.findOne({email})
        if(EmailExists){
            return res.status(400).json({
                ok:false,
                msg:'Email is already being used'
            })
        }
        const newUser = new User(req.body);
        
        const salt = bcrypt.genSaltSync()
        newUser.password = bcrypt.hashSync(password, salt)
        await newUser.save()
        
        const token = await generateJWT(newUser.id)
        

        res.json({
            ok:true,
            newUser,
            token
        })

    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'Speak to manager'
        })
    }
}

const loginUser = async (req, res = response) => {
    
    
    try {
        const {email, password} = req.body;
        const dbUser = await User.findOne({email})
        if(!dbUser){
            return res.status(500).json({
                ok:false,
                msg:'Usuario no encontrado'
            })
        }
        const validPassword = bcrypt.compareSync(password, dbUser.password)
        if(!validPassword){
            return res.status(500).json({
                ok:false,
                msg:'Datos erroneos'
            })
        }
        const token = await generateJWT(dbUser.id)
        
        res.json({
            ok:true,
            dbUser,
            token
        })    
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'Speak to manager'
        })
    }

}

module.exports = {
    loginUser,
    createUser
}