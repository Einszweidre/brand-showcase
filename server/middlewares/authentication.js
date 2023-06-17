const { User, Customer } = require("../models");
const { decodeToken } = require("../helpers/encodeToken");

async function authentication(req, res, next) {
  try {
    let { webToken } = req.headers;
    if (!webToken) throw { name: "Unauthenticated" };
    const payload = decodeToken(webToken);
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

async function publicAuthentication(req, res, next) {
  try {
    let { webToken } = req.headers;
    if (!webToken) throw { name: "Unauthenticated" };
    const payload = decodeToken(webToken);
    const customer = await Customer.findByPk(payload.id);
    if (!customer) throw { name: "Unauthenticated" };
    req.user = {
      id: customer.id,
      email: customer.email,
      role: customer.role,
    };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  authentication,
  publicAuthentication,
};
