const jwt = require("jsonwebtoken");
const privateKey = process.env.JWT_SECRET;

const encodeToken = (data) => {
  return jwt.sign(data, privateKey);
};

const decodeToken = (token) => {
  return jwt.verify(token, privateKey);
};

module.exports = {
  encodeToken,
  decodeToken,
};
