const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    console.log("Connect DB success")
})
.catch(error => handleError(error));

module.exports = mongoose