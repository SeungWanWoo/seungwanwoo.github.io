$(document.body).ready(() => {
    new WOW().init();
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'forthPage'],
        menu: '#menu',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Who am i?', 'About me', 'My project', 'And next...'],
        scrollingSpeed: 1000,
        autoScrolling: true,
        scrollOverflow: true,
        afterLoad: function(origin, destination, direction) {
            
        },
        onLeave: function(origin, destination, direction) {

        }
    });
});

function copyToClipboard(val) {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  }
  $('.gmailaddr').click(function() {
    copyToClipboard('seungwan.woo94@gmail.com');
    swal('복사완료!', '여기로 메일을 보내주시면 됩니다.', 'success');
  });

$('#moreOhora').click((e) => {
    e.preventDefault();
    location.href = "ohora.html";
});

$('#moreCaps').click((e) => {
    e.preventDefault();
    location.href = "ddockdi.html";
});

$('#moreEtc').click((e) => {
    e.preventDefault();
    location.href = "etc.html";
})

