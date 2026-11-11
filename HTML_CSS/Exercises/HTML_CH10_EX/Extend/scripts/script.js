/*
    Student Name: Damon Strother
    File Name: script.js
    Date: 10/20/2026
*/

$(document).ready(function() {

    // Hide the article content when the Hide button is clicked
    $("#hide").click(function() {
        $("#main p").hide();
    });

    // Show the article content when the Show button is clicked
    $("#show").click(function() {
        $("#main p").show();
    });

});