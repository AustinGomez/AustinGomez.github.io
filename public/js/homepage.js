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
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(objectifyForm($("#contact-form").serializeArray())),
            error: function() {
                $('#confirmed-modal').modal()
            },
            success: function() {
                $('#confirmed-modal').modal()
            }
        });
    })

    function objectifyForm(formArray) {//serialize data function
        
          var returnArray = {};
          for (var i = 0; i < formArray.length; i++){
            returnArray[formArray[i]['name']] = formArray[i]['value'];
          }
          return returnArray;
        }
});