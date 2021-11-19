const bcrypt = require('bcrypt');
const { Admin } = require('../db/models');

// eslint-disable-next-line consistent-return
const loginAdmin = async (req, res) => {
  const {
    login,
    password,
  } = req.body;

  const user = await Admin.findOne({
    where: {
      login,
    },
  });

  if (user) {
    const isSame = await bcrypt.compare(password, user.password);
    if (isSame) {
      req.session.admin = { admin: user.login };
      return res.json({ isAdmin: true, session: req.session.admin });
    }
  } else return res.json({ isAdmin: false, session: {} });
};

module.exports = {
  loginAdmin,
};
