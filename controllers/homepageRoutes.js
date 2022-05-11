const express = require('express');
const router = express.Router();
const {User,Blog, Comment} = require('../models');

router.get("/",(req,res)=>{
    Blog.findAll({
        include: User
    }).then(Blogs=>{
        const hbsBlogs = Blogs.map(Blog=>Blog.get({plain:true}))
        const loggedIn = req.session.user?true:false
        res.render("homepage",{Blogs:hbsBlogs,loggedIn,username:req.session.user?.username})
    })
})

router.get("/login",(req,res)=>{
    if(req.session.user){
        return res.redirect("/user")
    }
    res.render("login")
})

router.get("/user",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/login")
    }
    User.findByPk(req.session.user.userid,{
        include:[Blog]
    }).then(userData=>{
        const hbsData = userData.get({plain:true})
        hbsData.loggedIn = req.session.user?true:false
        res.render("user",hbsData)
    })
})

router.get("/post/:id", (req, res) => {
    Blog.findByPk(req.params.id, {
        include: [
            User,
            {model: Comment,
            include: [User]}],
        nest: true,
    }).then(postData => {
        const data = postData.get({ plain: true })
        data.loggedIn = req.session.user ? true : false
        data.username = req.session.user?.username
        res.render("post", data)
    })
})

module.exports = router;