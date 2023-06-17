const { successResponse } = require("../helpers/jsonResponse");
const { User, Menu, Category, Image } = require("../models");

class Admin {
  static async fetchMenu(req, res, next) {
    try {
      const menus = await Menu.findAll({
        include: [{ model: Category }, { model: User }, { model: Image }],
        order: [["id", "ASC"]],
      });

      res.json(successResponse(menus));
    } catch (error) {
      next(error);
    }
  }

  static async fetchMenuDetail(req, res, next) {
    try {
      const { id } = req.params;
      const menu = await Menu.findOne({
        where: {
          id,
        },
        include: [{ model: Category }, { model: Image }],
      });
      if (menu.length === 0) throw { name: "DataNotFound" };
      res.json(successResponse(menu));
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async fetchMenuImage(req, res, next) {
    try {
      const { id } = req.params;
      const image = await Image.findAll({
        where: {
          menuId: id,
        },
        order: [["id", "ASC"]],
      });
      if (image.length === 0) throw { name: "DataNotFound" };
      res.json(successResponse(image));
    } catch (error) {
      next(error);
    }
  }

  static async createMenu(req, res, next) {
    try {
      const { name, description, price, mainImg, categoryId } = req.body;
      console.log(req.body);
      const authorId = req.user.id;
      const createMenu = await Menu.create({
        name,
        description,
        price,
        mainImg,
        categoryId,
        authorId,
      });
      res.status(201).json(
        successResponse({
          message: `Success create menu ${createMenu.name}`,
        })
      );
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async fetchCategory(req, res, next) {
    try {
      const categories = await Category.findAll();
      res.json(successResponse(categories));
    } catch (error) {
      next(error);
    }
  }

  static async createCategory(req, res, next) {
    try {
      const { name } = req.body;
      const createCategory = await Category.create({ name });
      res.status(201).json(
        successResponse({
          message: `Success create category ${createCategory.name}`,
        })
      );
    } catch (error) {
      next(error);
    }
  }

  static async addImage(req, res, next) {
    try {
      const { imgUrl } = req.body;
      const menuId = req.params.id;
      await Image.create({ menuId, imgUrl });
      res.status(201).json(
        successResponse({
          message: `Success create image`,
        })
      );
    } catch (error) {
      next(error);
    }
  }

  static async updateMenu(req, res, next) {
    try {
      const { name, description, price, mainImg, categoryId } = req.body;
      const id = req.params.id;
      const authorId = req.user.id;
      await Menu.update(
        {
          name,
          description,
          price,
          mainImg,
          categoryId,
          authorId,
        },
        {
          where: {
            id,
          },
        }
      );
      res.status(201).json(
        successResponse({
          message: `Success update menu`,
        })
      );
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async updateCategory(req, res, next) {
    try {
      const { name } = req.body;
      const id = req.params.id;
      await Category.update(
        { name },
        {
          where: {
            id,
          },
        }
      );
      res.status(201).json(
        successResponse({
          message: `Success update category`,
        })
      );
    } catch (error) {
      next(error);
    }
  }

  static async deleteCategory(req, res, next) {
    try {
      const { id } = req.params;
      await Category.destroy({
        where: {
          id,
        },
      });
      res.status(201).json(
        successResponse({
          message: `Success delete category`,
        })
      );
    } catch (error) {
      next(error);
    }
  }

  static async deleteMenu(req, res, next) {
    try {
      const { id } = req.params;
      await Menu.destroy({
        where: {
          id,
        },
      });
      res.status(201).json(
        successResponse({
          message: `Success delete menu`,
        })
      );
    } catch (error) {
      next(error);
    }
  }

  static async deleteImage(req, res, next) {
    try {
      const { id } = req.params;
      await Image.destroy({
        where: {
          id,
        },
      });
      res.status(201).json(
        successResponse({
          message: `Success delete image`,
        })
      );
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Admin;
