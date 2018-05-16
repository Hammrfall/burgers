$(document).ready(function () {
    $("h2").css("color", "green");


})

//Callbacks
$("#newBurger").on("click", function () {
    var burgerName = $("#burgername").val().trim()
    if (burgerName != "") {
        querystring = "/api/newburger"
        $.post(querystring, {
                name: burgerName
            },
            function (data) {
                console.log("Post from client.js ran")
            });
    }
});

$(".burgerbutton").on("click", function () {
    console.log(this)
    var index = $(this).attr("data_id")
    queryString = "/api/consume/" + index;
    console.log(queryString)
    $.ajax({
        url: queryString,
        type: 'PUT',
        data: {
            value: 1
        },
        success: function (result) {
            console.log("put from client.js ran")
            location.reload()
        }
    });
    //$.put(queryString,{value: 1},function(data){


})