const db = require('../config/firebaseConfig');
const ApiError = require('../entities/ApiError');

const listUsers = async (req, res, next) => {
  try {
    const users = [];
    const snapshot = await db.collection('USERS').get();
    snapshot.forEach((doc) => {
      users.push({ _id: doc.id, ...doc.data() });
    });
    res.status(200).json(users);
  } catch (error) {
    next(new ApiError('Failed to list users', 500));
  }
};

const addUser = async (req, res, next) => {
  try {
    const { data } = req.body;
    await db.collection('USERS').add(data);
    res.status(201).json({ message: 'User added successfully' });
  } catch (error) {
    next(new ApiError('Failed to add user', 500));
  }
};

module.exports = { listUsers, addUser };
