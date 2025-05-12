const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/
  },
  address: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  bloodGroup: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  diseases: {
    type: String
  }
});

module.exports = mongoose.model('Form', formSchema);