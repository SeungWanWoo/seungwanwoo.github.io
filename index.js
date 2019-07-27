$(document.body).ready(() => {
    new WOW().init();

    var myFullpage = new fullpage('#fullpage', {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        scrollHorizontally: true,
        anchors: ['firstPage', 'secondPage', 'thirdPage'],
        continuousVertical: true,
        menu: '#myMenu',
        afterLoad: function(anchorLink, index) {
        },
        onLeave: function(origin, destination, direction) {
        }
    });
});
