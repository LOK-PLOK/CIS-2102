const usersService = require("../services/usersService");

const registerController = async (req, res) => {
  const { email, name } = req.body;
  const newUser = await usersService.createUser({ email, name });
  res.json(newUser);
};

const loginController = async (req, res) => {
  const { email } = req.body;
  const token = await usersService.loginUser(email);

  if (!token) return res.status(400).json({ message: "Invalid credentials" });

  res.json({ token });
};

module.exports = {
  registerController,
  loginController,
};
