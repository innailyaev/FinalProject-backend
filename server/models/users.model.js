const mongoose = require ('mongoose');
const validator = require ('validator');
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const jwtKey = 'thisismysecretkey';
const postsmodel = require('./posts.model');

const usersSchema = mongoose.Schema ({
  name: {
    type: String,
    required: true,
    unique: false,
    trim:true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    trim:true,
    validate (value) {
      if (!validator.isEmail (value)) {
        throw new Error ('Email is invalid');
      }
    },
  },
  password: {
    type: String,
    required: true,
    unique: false,
    trim:true,
    validate (value) {
      if (!validator.isStrongPassword (value)) {
        throw new Error ('Password is not strong');
      }
    },
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

usersSchema.virtual('posts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'owner'
})

usersSchema.methods.toJSON = function(){
  const user=this;
  const userObject=user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  
  return userObject;
}

usersSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign ({_id: user._id.toString ()}, jwtKey);

  user.tokens = user.tokens.concat ({token});
  await user.save();
  return token;
};

usersSchema.statics.findByCredentials = async (email, password) => {
  const user = await usersmodel.findOne ({email});
  if (!user) {
    throw new Error ('unable to login');
  }
  const isMatch = await bcrypt.compare (password, user.password);
  if (!isMatch) {
    throw new Error ('unable to login');
  }
  return user;
};

//Hash the password before saving
usersSchema.pre ('save', async function (next) {
  const user = this;
  if (user.isModified ('password')) {
    user.password = await bcrypt.hash (user.password, 8);
  }
  next ();
});

const User = mongoose.model ('User', usersSchema);
module.exports = User;
// module.exports = mongoose.model('rooms',roomSchema);
