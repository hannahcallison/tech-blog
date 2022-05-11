document.querySelector("#newBlogPost").addEventListener("submit",e=>{
    e.preventDefault()
    const blogObj = {
        title:document.querySelector("#title").value,
        body:document.querySelector("#body").value,
    }
    console.log(blogObj)
    fetch("/api/blogs",{
        method:"POST",
        body:JSON.stringify(blogObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})

const button = document.querySelector("#deleteBtn")
button.addEventListener('click', e => {
    var delPostId = e.target.getAttribute('data-id')
    fetch(`/api/blogs/${delPostId}`, {
        method: "DELETE"
    }).then(res => {
        if (res.ok) {
            location.reload()
        } else {
            alert("trumpet sounds")
            }
        })
    })

const uButton= document.querySelector("#updateBtn")
uButton.addEventListener('click', e => {
    const blogObj = {
        title: e.target.parentNode.children[0].value,
        body: e.target.parentNode.children[1].value,
    }
    fetch(`/api/blogs/${e.target.value}`, {
        method: "PUT",
        body: JSON.stringify(blogObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
                location.reload()
        } else {
                alert("update failed, check if logged in")
        }
    })
})