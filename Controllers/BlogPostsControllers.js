const BlogPostModel = require("../Models/BlogPostModel")

const BlogPostsCreate = async(req,res)=>{
    const {title,content,author,tags}=req.body
   
    if(!title || !content || !author || !tags){
        return res.status(400).json({message:"Please fill all fields."})
    }

    try {
        const publishedDate = new Date()
        await BlogPostModel.create({title,content,author,publishedDate,tags})
        res.status(201).json({message:"Blog Creates Successfully "})
        
    } catch (error) {
        return res.status(201).send({error:"Internal Server Error"})
    }
}

const BlogPostDelete = async(req,res)=>{
    const {postId} = req.params
   try {
    await BlogPostModel.findByIdAndDelete(postId)
    res.status(200).json({message:"Blog Post Deleted Successfully "})
   } catch (error) {
    return res.status(201).send({error:"Internal Server Error"})
   }
}

const getAllBlogPosts = async(req,res)=>{
    try{
        const getAllPosts =await BlogPostModel.find()
        if(getAllPosts.length == 0){
            return res.status(404).json({message:"No Blog Posts Found "})
        }
        res.status(200).json({getAllPosts})
    }
    catch(error){
        return res.status(201).send({error:"Internal Server Error"})
    }
}

const getSingleBlogPosts = async(req,res)=>{
    const {postId} = req.params
    console.log(req.params)
    try {
        const getSingleBlogPost = await BlogPostModel.findById(postId)
        console.log(getSingleBlogPost)
        res.status(200).json({getSingleBlogPost})
    } catch (error) {
        return res.status(201).send({error:"Internal Server Error"})
    }
}

const updateBlogPosts = async(req,res)=>{
    const {postId} = req.params
    const {title,content,author,tags} = req.body
    try {
        const publishedDate = new Date()
        const updateBlogPost = await BlogPostModel.findByIdAndUpdate(postId,{title,content,author,tags,publishedDate})
            res.status(200).json({updateBlogPost})
            } catch (error) {
                return res.status(201).send({error:"Internal Server Error"})
                }
}


module.exports= {BlogPostsCreate,BlogPostDelete,getAllBlogPosts,getSingleBlogPosts,updateBlogPosts}