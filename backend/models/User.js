// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const UserSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// // Encrypt password before saving the user
// UserSchema.pre('save', async function (next) {
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// module.exports = mongoose.model('User', UserSchema);






const mongoose = require('mongoose');
const RegisterSchema = new mongoose.Schema({
name:String,
password:String
});
const RegisterModel = mongoose.model("register",RegisterSchema);
module.exports=RegisterModel;