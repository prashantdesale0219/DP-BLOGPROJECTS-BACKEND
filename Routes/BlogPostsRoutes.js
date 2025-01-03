const express = require('express')
const { BlogPostsCreate, BlogPostDelete, getAllBlogPosts, getSingleBlogPosts, updateBlogPosts } = require('../Controllers/BlogPostsControllers')
const BlogPostsRouters = express.Router()
BlogPostsRouters.post("/createBlogPost",BlogPostsCreate)
BlogPostsRouters.delete('/deleteBlogPost/:postId',BlogPostDelete)
BlogPostsRouters.get("/getAllPosts",getAllBlogPosts)
BlogPostsRouters.get("/getSinglePost/:postId",getSingleBlogPosts)
BlogPostsRouters.put("/updateBlogPost/:postId",updateBlogPosts)
module.exports = BlogPostsRouters