$(document.body).ready(() => {
    new WOW().init();

    $("#menu li").click(function() {
        var offset = $($(this).attr('data-target')).offset();
        $("html, body").animate({
              scrollTop: offset.top
        }, 1000);
    });
});

$('#moreOhora').click((e) => {
    e.preventDefault();
    location.href = "ohora.html";
})

