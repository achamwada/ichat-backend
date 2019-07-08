const jwt = require("jsonwebtoken");
const config = require("config");

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  res.cookie('x-auth-token','token test', {
    maxAge: 36000,
    path: '/',
    httpOnly: true
  })

  try {
    decodedPayload = jwt.verify(token, config.get('JWT_SECRET'));
    req.body.user = decodedPayload;
    next();
      
  } catch (error) {
      console.log(error.message);
      return res.status(401).json({msg: 'Unauthorised'});
  }
};

module.exports = auth;
