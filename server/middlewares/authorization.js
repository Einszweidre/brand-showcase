const { Lodging } = require("../models");

async function authorization(req, res, next) {
  try {
    let userId = req.user.id;
    let lodging = await Lodging.findByPk(req.params.id);
    if (!lodging) throw { name: "DataNotFound" };
    if (userId !== lodging.authorId && req.user.role !== "Admin")
      throw { name: "Forbidden" };
    next();
  } catch (error) {
    next(error);
  }
}

async function adminAuth(req, res, next) {
  try {
    let lodging = await Lodging.findByPk(req.params.id);
    if (!lodging) throw { name: "DataNotFound" };
    if (req.user.role !== "Admin") throw { name: "Forbidden" };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  authorization,
  adminAuth,
};
