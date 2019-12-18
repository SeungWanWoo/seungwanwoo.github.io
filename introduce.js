$(document.body).ready(() => {
    AOS.init();
});

$('#mymail').click((e) => {
    e.preventDefault();
    location.href = "mailto:seungwan.woo94@gmail.com";
});

$('#mygit').click((e) => {
    e.preventDefault();
    location.href = "https://github.com/SeungWanWoo";
});