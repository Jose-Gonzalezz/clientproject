/* global $ */

console.log('hi');

$('h1').click(function() {
    $('h1').css('color', 'green');
    $('h1').text('Sound Nation');
});

$("#search-button").click(function() {
    var input = $("#search-term").val();
    var SoundCloud = "https://api.soundcloud.com/tracks?q=" + input + "&client_id=5aa8e389ba4e24b6106af5159ab3e344";
   
   
    $.ajax({
        url: SoundCloud,
        method: "GET",
        success: function(response) {
            var random = Math.floor(Math.random() * response.length);
            console.log(random)
            var track= response[random]
            console.log(track)
            $("ul").append("<li><a>" + track.title + "<a><li>");

        }
    });
});
