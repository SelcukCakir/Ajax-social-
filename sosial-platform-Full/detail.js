let posts;
let comment;

function detailLoad() {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('blog');
    postDetail(blogId).then(function(values){
        Promise.all([comments(values.blogId)]).then(function (){
          detayBas();
        });
    
      })

}

function postDetail(blogId) {
    return new Promise(function (resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", `https://jsonplaceholder.typicode.com/posts/${blogId}`, true);
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200)
                resolve(posts = JSON.parse(xhttp.responseText));
                else ("Postcomments Failled")
                
            }
        }

        xhttp.send();
    });
}

function comments(blogId) {
    return new Promise(function (resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", `https://jsonplaceholder.typicode.com/posts/${blogId}/comments`, true);
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200)

                resolve(comment = JSON.parse(xhttp.responseText));
                else ("Postcomments Failled")
            }
        }

        xhttp.send();
    });
}

function detayBas() {

    document.getElementById("detayBas").innerHTML += `<div class="container homeUsers">
    <div class="row">
    <div class="col-md-8">
    <h4>${posts.title}</h4><br>
    <p>${posts.body}</p>
    </div>
    <div class="col-md-4"><img src='https://picsum.photos/200/301.webp' width='100%' height='200px'></div>
    </div>`;
    for (let i = 0; i < comment.length; i++) {
        document.getElementById("detayBas").innerHTML += `<div class="container homeUsers">
    <div class="row">
    <div class="col-md-8">
    <h4>${comment[i].name}</h4><br>
    <p>${comment[i].body}</p>
    </div>
    <div class="col-md-4"><img src='https://picsum.photos/200/3${i}.webp' width='100%' height='200px'></div>
    </div>`
    }
}
// function commentBas() {
//     for (let i = 0; i < comment.length; i++) {
//         document.getElementById("detayBas2").innerHTML += `<div class="container homeUsers">
//     <div class="row">
//     <div class="col-md-8">
//     <h4>${comment[i].name}</h4><br>
//     <p>${comment[i].body}</p>
//     </div>
//     <div class="col-md-4"><img src='https://picsum.photos/200/3${i}.webp' width='100%' height='200px'></div>
//     </div>`
//     }
// }