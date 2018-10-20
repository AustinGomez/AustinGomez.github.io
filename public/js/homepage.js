$(document).ready(function () {
    $(".portfolio-card").click(function (e) {
        console.log('hello')
        $(".portfolio-card").removeClass("active");
        $(e.target).addClass("active");
    });
});