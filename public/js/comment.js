document.querySelector("#newComment").addEventListener("submit", (e) => {
    e.preventDefault();
    const commentObj = {
      description: document.querySelector("#comment").value.trim(),
      // blog_id: blog.id,
    };
    console.log(commentObj);
    fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify(commentObj),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        location.href = "/homepage";
      } else {
        alert("trumpet sound");
      }
    });
  });