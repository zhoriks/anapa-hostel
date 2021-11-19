const bcrypt = require('bcrypt');
const { Admin } = require('../db/models');

// eslint-disable-next-line consistent-return
const login = async (req, res) => {
  const {
    username,
    password,
  } = req.body;

  const user = await Admin.findOne({
    where: {
      login: username,
    },
  });

  if (user) {
    const isSame = await bcrypt.compare(password, user.password);
    if (isSame) {
      req.session.admin = { admin: user.login };
      return res.json({ isAdmin: true });
    }
  } else return res.json({ isAdmin: false });
};

module.exports = {
  login,
};
