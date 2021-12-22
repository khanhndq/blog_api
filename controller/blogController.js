const mongoose = require('mongoose')

const blogModel = require('./../model/blog')

const findAllBlog = async (req,res) => {
    const blogs = await blogModel.find({}).catch(err => {
        console.log('Error find all blog '+err)
        return res.status(500).json({
            success: "fail"
        })
    })
    return res.status(200).json({
        blogs
    })
}

const findABlog = async (req,res) => {
    const { id } = req.params
    console.log(id)
    const blog = await blogModel.findById(id).catch(err => {
        console.log('Error find a blog '+err)
        return res.status(500).json({
            success: "fail"
        })
    })
    return res.status(200).json({
        blog
    })
}

const createBlog = (req,res) =>{
    console.log(req.body)
    const getBlog = new blogModel(req.body)
    getBlog.save().catch(err => {
        console.log('Error create new blog '+err)
        return res.status(500).json({
            success: "fail"
        })
    })
    return res.status(200).json({
        success: "success"
    })
}

const replaceBlog = async (req,res) => {
    const { id } = req.params
    const newBlog = req.body
    const blog = await blogModel
        .findByIdAndUpdate(id,newBlog)
        .catch(err => {
            console.log('Error replace blog '+err)
            return res.status(500).json({
                success: "fail"
            })
        })
    return res.status(200).json({
        success: "success"
    })
}


module.exports = {
    findAllBlog,
    findABlog,
    createBlog,
    replaceBlog
}