const sequelize = require("../config/connection")
const {User,Blog} = require("../models")

const Users = [
    {
        username:"Hannah",
        password:"password1"
    },
    {
        username:"Arthur",
        password:"password2"
    },
    {
        username:"Megan",
        password:"password3"
    }
]

const Blogs = [
    {
        id: 1,
        title:"MacBook Air",
        body:"I love my MacBook Air. It has lasted for several years and continues to function perfectly.",
        UserId:1
    },
    {
        id: 2,
        title:"JavaScript",
        body:"JavaScript is an awesome program. I love making my websites more interactive.",
        UserId:2
    },
    {
        id: 3,
        title:"HTML",
        body:"HTML is great! Shout out to the tried and true.",
        UserId:3
    }
]

const feedMe = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(Users,{
            individualHooks:true
        });
        await Blog.bulkCreate(Blogs);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

feedMe()