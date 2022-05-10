document.querySelector("#blogTitle").addEventListener('click', e => {
    console.log(e.target.getAttribute('blogid'))
    location.href=`/post/${e.target.getAttribute('blogid')}`;
})