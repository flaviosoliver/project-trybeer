const connection = require('../config/connection');

const findByEmail = async (email) => {
  const [[user]] = await connection.execute('SELECT * FROM users WHERE email=?', [email]);
  return user;
};

const createUser = async (name, email, password, role) => {
  await connection.execute('INSERT INTO users(name, email, password, role) VALUES (?,?,?,?)',
  [name, email, password, role]);
};

const updateName = async (name, email) => {
  await connection.execute('UPDATE users SET name=? where email=?', [name, email]);
};

module.exports = {
  findByEmail,
  createUser,
  updateName,
};
