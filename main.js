var posts;

function mapPosts() {
    var list = '';
    for (var i = 0; i < posts.length; i++) {
        list += "<div class='card mb-3'>" +
        "<div class='card-body'>" +
          "<h5 class='card-title'>" + posts[i].title + "</h5>" +
          "<h6 class='card-subtitle mb-2 text-muted'>Id: " + posts[i].id + "</h6>" +
          "<p class='card-text'>" + posts[i].body + "</p>" +
          "<a href='#' class='card-link'>edit</a>" +
          "<a href='#' class='card-link'>delete</a>" +
        "</div>" + 
      "</div>"
    }
    document.getElementById('posts').innerHTML = list;
}

function getPosts() {
    fetch('http://localhost:8080/postbook/webapi/postbook/posts/all')
        .then(res => res.json())
        .then(res => {
            posts = res;
            mapPosts();
        })
}