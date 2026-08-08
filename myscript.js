var modal = document.getElementById("myModal");
var clos = document.getElementById("myClose");
var btn = document.getElementById("myBtn");

var content = document.getElementById("myContent");

var menuTrigger = document.getElementById('menuTrigger');
var headerMenu = document.getElementById('headerMenu');

menuTrigger.onclick = function() {
    $("#headerMenu").slideToggle(500);
}

$("#headerMenu a").click(function() {
    if (headerMenu.style.display === "block") {
        $("#headerMenu").slideUp(500);
    }
});



btn.onclick = function() {
    modal.style.display="block";
    setTimeout(opacity1, 100);
}

function opacity1() {
    content.style.opacity="1";
}

function none() {
    content.style.opacity="1";
    modal.style.display="none";
}


clos.onclick = function() {
    content.style.opacity="0";
    setTimeout(none, 1000);
}


