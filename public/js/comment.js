document.querySelector("#newComment").addEventListener("submit", (e) => {
    e.preventDefault();
    const commentObj = {
      description: document.querySelector("#comment").value.trim(),
      postId: document.querySelector("#comment").getAttribute('postId')
    };
    fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify(commentObj),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        location.reload();
      } else {
        alert("trumpet sound");
      }
    });
  });