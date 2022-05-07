const sequelize = require("../config/connection")
const {User,Blog} = require("../models")

const users = [
    {
        username:"",
        password:""
    },
    {
        username:"",
        password:""
    },
    {
        username:"",
        password:""
    }
]

const blogs = [
    {
        title:"",
        body:"",
        UserId:
    },
    {
        title:"",
        body:"",
        UserId:
    },
    {
        title:"",
        body:"",
        UserId:
    }
]

const feedMe = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

feedMe()