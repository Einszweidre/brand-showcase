"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Menu.belongsTo(models.User, {
        foreignKey: "authorId",
      });
      Menu.belongsTo(models.Category, {
        foreignKey: "categoryId",
        onDelete: "CASCADE",
      });
      Menu.hasMany(models.Image, {
        foreignKey: "menuId",
        onDelete: "CASCADE",
      });
    }
  }
  Menu.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Name already exist",
        },
        validate: {
          notEmpty: {
            msg: "Name Required",
          },
          notNull: {
            msg: "Name Required",
          },
        },
      },
      slug: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Description Required",
          },
          notNull: {
            msg: "Description Required",
          },
        },
      },
      mainImg: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Image Required",
          },
          notNull: {
            msg: "Image Required",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Image Required",
          },
          notNull: {
            msg: "Image Required",
          },
          min: {
            args: 5000,
            msg: "Price must be at least 5000",
          },
        },
      },
      categoryId: DataTypes.INTEGER,
      authorId: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate(menu) {
          menu.slug = menu.name.toLowerCase().replace(/\s+/g, "-");
        },
      },
      sequelize,
      modelName: "Menu",
    }
  );
  return Menu;
};
