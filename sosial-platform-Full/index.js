let homeUsers;

function ajaxLoad() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            homeUsers = JSON.parse(xhttp.responseText);
            detayBas();
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhttp.send();

}

function detayBas() {
    for (let i = 0; i < homeUsers.length; i++) {
        document.getElementById("homePage").innerHTML += `<div class="container homeUsers">
    <div class="row">
    <div class="col-md-10">
    <a href="detail.html?blog=${homeUsers[i].id}"><h4>${homeUsers[i].title}</h4></a>
    <p>${homeUsers[i].body}</p>
    </div>
    <div class="col-md-2">
    <img src='https://picsum.photos/200/30${i}.webp' width='100%' height='100px'></div>
    </div>
    </div>`
    }
}
