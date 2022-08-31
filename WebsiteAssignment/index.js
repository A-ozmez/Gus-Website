<!-- jQuery call to the accordion() method. -->
$(document).ready(function() {

    //selector
    var accordion = $("#accordion");

    accordion.accordion({
        collapsible: true,
        //each panel will be only as tall as its content
        heightStyle:"content",

    });

    $.ajax({
        type: "get",
        url: "Gus.json",

        beforeSend: function () {
            $("#forJSON").html("Loading...");


        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "JSON",
        success: function (data) {

            $("#forJSON").html("");


            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#forJSON").append(
                        "<p><b>" + "Birth Name" + "</b>" + value["Birth Name"] + "</p>" +
                        "<p><b>" + "Stage Name" + "</b>" +value["Stage Name"] + "</p>" +
                        "<p><b>" + "Born" + "</b>" +value["Born"] + "</p>" +
                        "<p><b>" + "Genres" + "</b>" +value["Genres"] + "</p><br><br>"
                    );
                });
            });
        }
    });
});