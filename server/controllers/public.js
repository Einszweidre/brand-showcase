const { successResponse } = require("../helpers/jsonResponse");
const { Menu, Category, Image } = require("../models");

class Public {
  static async fetchMenu(req, res, next) {
    try {
      const menus = await Menu.findAll({
        include: [{ model: Category }, { model: Image }],
        order: [["id", "ASC"]],
      });
      res.json(successResponse(menus));
    } catch (error) {
      next(error);
    }
  }

  static async fetchMenuDetail(req, res, next) {
    try {
      const slug = req.params.slug;
      const menu = await Menu.findOne({
        where: {
          slug,
        },
        include: [{ model: Category }, { model: Image }],
      });
      if (menu.length === 0) throw { name: "DataNotFound" };
      res.json(successResponse(menu));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Public;
