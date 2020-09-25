const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserDb = model("user", userSchema);

module.exports = UserDb;
