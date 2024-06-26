const UserModel = require("../model/mahasiswa");

const getAllUser = async (req, res) => {
  //tambahkan async karena terdapat await
  try {
    const [data] = await UserModel.getAll(); //await karena bersifat asinkronus, [data] karena hanya ingin mengambil data (rows) saja tidak fields
    res.json({
      message: "get all user succesfull",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};
const createNewUser = async (req, res) => {
  console.log(req.body);
  const { body } = req;
  try {
    await UserModel.createNewUser(body);
    res.json({
      message: "create new user succesfull",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await UserModel.updateUser(body, id);
    res.json({
      message: "update succesfull",
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.deleteUser(id);
    res.json({
      message: "Delete succesfull",
    });
  } catch (error) {}
};
module.exports = { getAllUser, createNewUser, updateUser, deleteUser };
