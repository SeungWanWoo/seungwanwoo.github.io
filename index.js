$(document.body).ready(() => {
    new WOW().init();
    var myFullpage = new fullpage('#fullpage', {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors: ['firstPage', 'secondPage', 'thirdPage'],
        continuousVertical: true,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'About', 'Project'],
        responsiveWidth: 1100,
        scrollOverflow: true,
        afterLoad: function(anchorLink, index) {
        },
        onLeave: function(origin, destination, direction) {
        }
    });
});
