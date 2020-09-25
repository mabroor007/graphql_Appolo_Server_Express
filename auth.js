const { sign } = require("jsonwebtoken");

exports.loginUser = (data, res) => {
  const token = sign(data, "JLDSKJFIWEOFJDKNFSHDWOIADJK", { expiresIn: "3d" });
  res.cookie("jwt", token);
  return "Successfully Logedin";
};
