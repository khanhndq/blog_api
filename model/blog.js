const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
title:  String, // String is shorthand for {type: String}
author: String,
body:   String,
});

module.exports = mongoose.model('Blog',blogSchema)
