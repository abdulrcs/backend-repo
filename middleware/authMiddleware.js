const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  const secret_token = process.env.SECRET_TOKEN;

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  } else if (token !== secret_token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
};

module.exports = authMiddleware;
