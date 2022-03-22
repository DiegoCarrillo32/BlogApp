const jwt = require('jsonwebtoken')
const generateJWT = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = {uid};
    jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn:'1h',

    }, (err, token) => {
      if(err){
          reject('Cant resolve token')
      }else{
          
          resolve(token)
      }
    })
  })
}

const checkJWT = (token = '') => {
  try {
    const {uid} = jsonwebtoken.verify(token, process.env.JWT_KEY)
    return [
      true, uid
    ]
  } catch (error) {
    return [
      false, null
    ]
  }
}

module.exports = {generateJWT, checkJWT}