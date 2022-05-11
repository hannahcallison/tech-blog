document.querySelector("#blogTitle").addEventListener('click', e => {
    console.log(e.target.getAttribute('data-id'))
    // location.href=`/post/${e.target.getAttribute('data-id')}`;
    fetch(`/api/blogs/${e.target.getAttribute('data-id')}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        console.log(res)
        // if(res.ok){
        //     document.location.replace("/post");
        // } else {
        //     alert("trumpet sound")
        // }
    })
})

 
const posts = document.querySelectorAll(".blogPost")
for (const post of posts) {
    post.addEventListener('click', e => {
        console.log(e.target.getAttribute('value'))
        location.href=`/blogpost/${e.target.getAttribute('value')}`;
    })
}