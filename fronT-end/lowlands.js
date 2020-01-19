/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/* bron: https://developer.mozilla.org/nl/docs/Web/API/Document/getElementById
bron: https://www.w3schools.com/js/js_htmldom_eventlistener.asp*/

/* Var aangemaakt voor 6 verschillende hartjes: heartIcon t/m heartIcon6
Elk hartje wordt opgehaald door getElementById 
addEventListener zorgt ervoor dat als je erop klikt, de function wordt uitgevoerd
Liked staat als class in de CSS en wordt opgehaald: Animatie wordt uitgevoerd = animatie van 2 sec en rood kleuren van het hartje. */


var heartIcon = document.getElementById('hartje1');
heartIcon.addEventListener('click', function () {
    heartIcon.classList.add('liked');
});

var heartIcon2 = document.getElementById('hartje2');
heartIcon2.addEventListener('click', function () {
    heartIcon2.classList.add('liked');
});

var heartIcon3 = document.getElementById('hartje3');
heartIcon3.addEventListener('click', function () {
    heartIcon3.classList.add('liked');
});

var heartIcon4 = document.getElementById('hartje4');
heartIcon4.addEventListener('click', function () {
    heartIcon4.classList.add('liked');
});

var heartIcon5 = document.getElementById('hartje5');
heartIcon5.addEventListener('click', function () {
    heartIcon5.classList.add('liked');
});

var heartIcon6 = document.getElementById('hartje6');
heartIcon6.addEventListener('click', function () {
    heartIcon6.classList.add('liked');
});
