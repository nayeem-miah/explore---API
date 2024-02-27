function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}

/**
 * 1. get the container element where you want to add the new elements
 * 2. create child element
 * 3. set inner text or inner HTML
 * 4. append child
 */

function displayPosts(data) {
  // added style
  const allbg = document.getElementById("body");
  allbg.classList.add("allbg");
  const postsContainer = document.getElementById("posts-container");
  for (const post of data) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    postDiv.innerHTML = `<h4>user-${post.userId}</h4>
                        <h5>posts : title-${post.title}</h5>
                        <p>posts description ${post.body}</p>
                        <p>id : ${post.id}</p> `;
    postsContainer.appendChild(postDiv);
    console.log(post);
  }
}

loadPost();
