const mongoose = require('mongoose');
const { Schema } = mongoose;

//userSchema
const userSchema = new Schema({
  googleId: String,
});

mongoose.model('users', userSchema);
