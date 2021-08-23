import jwt from 'jsonwebtoken';

export const jwtSign = (userId, email) => jwt.sign({ userId, email }, process.env.TOKEN_KEY, {
  expiresIn: '2h',
});

export const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.TOKEN_KEY);
    next();
  } catch (err) {
    res.status(403).json({
      resp_msg: 'Authentication Failed.',
    });
  }
};
