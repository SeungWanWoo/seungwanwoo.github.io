$('.glink').click((e) => {
    e.preventDefault();
    location.href = "https://github.com/SeungWanWoo/bitcamp-team-project";
})

$(document.body).ready(() => {
    new WOW().init();

    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors: ['firstPage', 'secondPage', 'thirdPage'],
        navigation: true,
        navigationPosition: 'right',
        scrollingSpeed: 1000,
        autoScrolling: true,
        scrollOverflow: true,
        afterLoad: function(origin, destination, direction) {
            
        },
        onLeave: function(origin, destination, direction) {
            
        }
    });
})

$('#subohora').click((e) => {
    e.preventDefault();
    location.href = "ohora.html";
});

$('.ppt').click((e) => {
    e.preventDefault();
    location.href = "contents/Ohora-ver3.pptx";
})

$('.arranged').click((e) => {
    e.preventDefault();
    location.href = "contents/오호라 프로젝트.pptx";
})