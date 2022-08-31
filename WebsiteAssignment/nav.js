/*let $ = function (id) { return document.getElementById(id); };*/


window.onload = function(){

    /*
    //to input navigation bar into each html
    fetch('nav.html').then(res => res.text()).then(text => {
        let oldElem = document.querySelector("script#replace_with_navbar");
        let newElem = document.createElement("div");
        newElem.innerHTML = text;
        oldElem.parentNode.replaceChild(newElem, oldElem);
    });*/


    const toggle_Button = document.getElementsByClassName('toggleButton')[0];
    const navbar_Links = document.getElementsByClassName('navbarLinks')[0];
    //hamburger menu comes down when clicked, goes up when clicked again
    toggle_Button.addEventListener('click', ()=> {
        navbar_Links.classList.toggle('active');

    });

    /*
    if(window.location.href === "https://webpages.uncc.edu/aozmez/Exercise/index.html"){
        $("index").classList.toggle("current");
    }else if (window.location.href === "https://webpages.uncc.edu/aozmez/Exercise/music.html"){
        $("music").classList.toggle("current");
    }*/

};

/*
$(document).ready(function () {

    $('ul.navbar-bar > li').onclick(function (e) {
        $('ul.navbar-bar > li').classList.remove('active');
        $(this).classList.add('active');
    });
});*/
