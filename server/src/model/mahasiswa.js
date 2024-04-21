const db = require("../config/database");

const getAll = () => {
  const sqlQuery = "SELECT * FROM mahasiswa";
  return db.execute(sqlQuery);
};

const createNewUser = (body) => {
  const sqlQuery = `INSERT INTO mahasiswa (nama, alamat, umur) VALUES ('${body.name}', '${body.address}', '${body.age}')`;
  return db.execute(sqlQuery);
};

const updateUser = (body, id) => {
  const sqlQuery = `UPDATE mahasiswa SET nama="${body.name}", alamat="${body.address}", umur=${body.age} WHERE ID=${id}`;
  return db.execute(sqlQuery);
};

const deleteUser = (id) => {
  const sqlQuery = `DELETE FROM mahasiswa WHERE ID=${id}`
  return db.execute(sqlQuery)
}

module.exports = {
  getAll,
  createNewUser,
  updateUser,
  deleteUser
};
