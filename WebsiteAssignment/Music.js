$(document).ready(function() {

    $.ajax({
        type: "get",
        url: "Albums.json",

        beforeSend: function () {
            $("#albums").html("Loading...");
            $("#names").html("Loading...");

        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "JSON",
        success: function (data) {

            $("#albums").html("");
            $("#names").html("");

            $.each(data, function () {
                $.each(this, function (key, value) {

                    $("#names").append(
                        "<h2>" + value["name"] + " (" + value["year"] + ")" + "</h2>"   + "<br>"
                    );
                    $("#albums").append(
                        //"<h2>" + value["name"] + " (" + value["year"] + ")" + "</h2>"   + "<br>" +
                        "<iframe src='" + value["src"] + "' width=\"100%\" height=\"380\"\n" +
                        "                frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"
                    );
                });
            });
        }
    });

    $("#slider").bxSlider({

        pause: 5000,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideWidth: 1450,
        slideMargin: 100,
        adaptiveHeight: true

    });
});

