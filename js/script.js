/* global $ */

console.log('hi');

$('h1').click(function() {
    $('h1').css('color', 'green');
    $('h1').text('Sound Nation');
});

$("#search-button").click(function() {
    var input = $("#search-term").val();
    var SoundCloud = "https://api.soundcloud.com/tracks?q=beyonce&client_id=5aa8e389ba4e24b6106af5159ab3e344";
    var random = Math.floor(Math.random() * 25);


    $.ajax({
        url: SoundCloud,
        method: "GET",
        success: function(response) {
        response.forEach(function(track){
                console.log(track.title);
            $("ul").append("<li>" + track.title + "<li>");

            });
        }
    });
});
