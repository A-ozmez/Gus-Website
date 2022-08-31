$(document).ready(function() {

    $('.rate').raty({
        starType: 'i',
        cancelButton: true,
        half: true
    });


    //button
    $("#submit").on("click", evt => {
        if($("#name").val() === "" || $("#comment").val() === ""){
            alert("You must enter a valid name and comment if you want to make a post.")
        }else
        {
            $("#inputs").append("<h3>" + $("#name").val() + "</h3>" + "<p>" + $("#comment").val() + "</p><div id='break'><br></div>");
        }

        $("#name").focus();
    } )


});

