const { User, Customer } = require("../models");
const { decodeToken } = require("../helpers/encodeToken");

async function authentication(req, res, next) {
  try {
    let { webtoken } = req.headers;
    if (!webtoken) throw { name: "Unauthenticated" };
    const payload = decodeToken(webtoken);
    const user = await User.findByPk(payload.id);
    if (!user) throw { name: "Unauthenticated" };
    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
    };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { authentication };
