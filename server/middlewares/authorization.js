const { Menu } = require("../models");

async function authorization(req, res, next) {
  try {
    let userId = req.user.id;
    let menu = await Menu.findByPk(req.params.id);
    if (!menu) throw { name: "DataNotFound" };
    if (userId !== menu.authorId) throw { name: "Forbidden" };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authorization;
