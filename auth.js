const { sign } = require("jsonwebtoken");
const userDb = require("./Models/userAuth");

exports.loginUser = async ({ userName, password }, res) => {
  try {
    const user = await userDb.findOne({ userName });
    if (user.password !== password) return "Password was incorrect!";
    if (user) {
      const token = sign({ uid: user._id }, "JLDSKJFIWEOFJDKNFSHDWOIADJK", {
        expiresIn: "3d",
      });
      res.cookie("jwt", token);
      return "Successfully Loged in";
    }
    if (user === null) {
      return "user not found!";
    }
  } catch (error) {
    return `login failed ${error.message}`;
  }
};

exports.signUpUser = async ({ userName, email, password }, res) => {
  try {
    const user = new userDb({ userName, email, password });
    const addedUser = await user.save();
    // console.log("Added user", addedUser);
    if (addedUser) {
      const token = sign(
        { uid: addedUser._id },
        "JLDSKJFIWEOFJDKNFSHDWOIADJK",
        { expiresIn: "3d" }
      );
      res.cookie("jwt", token);
      return "User created successfully.";
    }
  } catch (error) {
    return `User creation failed ${error.message}`;
  }
};

exports.logOutUser = (res) => {
  res.cookie("jwt", "");
  return "Loged out successfully!";
};
