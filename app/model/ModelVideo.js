const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  videos: {
    type: String,
  },
  title: {
    type: String,
  },
  user: {
    type: String,
  },
});

module.exports = mongoose.model('Video', VideoSchema);