const jwt = require('jsonwebtoken');

module.exports.authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  
  if (!token) {
    return res.status(403).send('Access denied. No token provided.');
  }

  try {
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length); 
    }

    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send('Invalid token.');
  }
};
