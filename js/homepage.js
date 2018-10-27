$(document).ready(function () {
    $(".portfolio-card").click(function (e) {
        console.log('hello')
        $(".portfolio-card").removeClass("active");
        $(e.target).addClass("active");
    });

    $("#message-button").click(function(event) {
        console.log("submitted");

        $.ajax({
            url: 'https://us-central1-site-220117.cloudfunctions.net/contactMe',
            type: 'post',
            dataType: 'json',
            data: $('#contact-form').serialize(),
            success: function(data) {
                $('#contact-modal').hmtl('hello world')
            }
        })
    })
});