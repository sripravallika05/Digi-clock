const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

const getUsers = (req, res) => {
  res.json(users);
};

module.exports = { getUsers };
