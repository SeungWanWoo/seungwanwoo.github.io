$('.glink').click((e) => {
    e.preventDefault();
    location.href = "https://github.com/SeungWanWoo/bitcamp-team-project";
})

$(document.body).ready(() => {
    new WOW().init();

    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors: ['firstPage', 'secondPage'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['소개', '사용기술'],
        scrollingSpeed: 1000,
        autoScrolling: true,
        scrollOverflow: true,
        afterLoad: function(origin, destination, direction) {
            
        },
        onLeave: function(origin, destination, direction) {
            
        }
    });
})