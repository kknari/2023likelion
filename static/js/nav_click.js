//url 버전

var now = window.location.href;
var talk = "talk";
var create = "create";
var about = "about";
var org = "org";
var recruit = "recruit";

var homeBtn = document.querySelector(".nav a:nth-child(1)");
var aboutBtn = document.querySelector(".nav div:nth-child(2) a");
var orgBtn = document.querySelector(".nav div:nth-child(3) a");
var recruitBtn = document.querySelector(".nav div:nth-child(4) a");
var talkBtn = document.querySelector(".nav div:nth-child(5) a");

if(now.includes(about)){
    aboutBtn.style.backgroundColor="#e8c9d2";
    aboutBtn.style.color = "black";
}
else if(now.includes(org)){
    orgBtn.style.backgroundColor="#e8c9d2";
    orgBtn.style.color = "black";
}

else if(now.includes(recruit)){
    recruitBtn.style.backgroundColor="#e8c9d2";
    recruitBtn.style.color = "black";
}

else if(now.includes(talk)){
    talkBtn.style.backgroundColor="#e8c9d2";
    talkBtn.style.color = "black";
}

else{
    homeBtn.style.backgroundColor="#e8c9d2";
    homeBtn.style.color = "black";
}

//Click 곧 .. 할 예정