const { User } = require("../models");
const bcrypt = require("bcryptjs");
const { encodeToken } = require("../helpers/encodeToken");
const { successResponse } = require("../helpers/jsonResponse");

async function processLogin(email, password) {
  const findUser = await User.findOne({
    where: {
      email,
    },
  });
  if (!findUser) throw { name: "DataNotFound" };
  const checkPassword = bcrypt.compareSync(password, findUser.password);
  if (!checkPassword) throw { name: "InvalidUser" };
  const webtoken = encodeToken({
    id: findUser.id,
    email: findUser.email,
  });

  return webtoken;
}

class Auth {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const webtoken = await processLogin(email, password);
      res.json(
        successResponse({
          webtoken: webtoken,
          type: "Bearer",
        })
      );
    } catch (error) {
      next(error);
    }
  }

  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;
      const createUser = await User.create({
        username,
        email,
        password,
        phoneNumber,
        address,
      });

      res.status(201).json(
        successResponse({
          message: `Create user ${createUser.email} success`,
        })
      );
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Auth;
