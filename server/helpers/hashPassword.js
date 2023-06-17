const bcryptjs = require("bcryptjs");

const hashPassword = (password) => {
  const salt = bcryptjs.genSaltSync(10);
  const hashedPassword = bcryptjs.hashSync(password, salt);
  return hashedPassword;
};

const comparePassword = (password, hashedPassword) => {
  const compareResult = bcryptjs.compareSync(password, hashedPassword);
  return compareResult;
};

module.exports = {
  hashPassword,
  comparePassword,
};
