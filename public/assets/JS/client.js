
//Callbacks
$("#newBurger").on("click", function () {
    var burgerName = $("#burgername").val().trim()
    if (burgerName != "") {
        querystring = "/api/newburger"
        $.post(querystring, {
                name: burgerName
            },
            function (data) {
                
            });
    }
});

$(".burgerbutton").on("click", function () {
    console.log(this)
    var index = $(this).attr("data_id")
    queryString = "/api/consume/" + index;
    $.ajax({
        url: queryString,
        type: 'PUT',
        data: {
            value: 1
        },
        success: function (result) {
            location.reload()
        }
    });
})