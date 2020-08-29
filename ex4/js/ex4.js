$(function(){
    $('#advice').append("<p>Select your favourite colour among the colours</p>");
});

$(function(){
    $('#sel').append("<p>Your favorite colours in order</p>");
});

$(function(){
    $('#img1').attr('src', 'blue.jpg');
});

$(function(){
    $('#img2').attr('src', 'red.jpg');
});

$(function(){
    $('#img3').attr('src', 'yellow.jpg');
});

$(function() {
    $('#img1').click(function() {
        $('#img1').hide();
        $('ul').append("<li>Blue</li>")
    });
});

$(function() {
    $('#img2').click(function() {
        $('#img2').hide();
        $('ul').append("<li>Red</li>")
    });
});

$(function() {
    $('#img3').click(function() {
        $('#img3').hide();
        $('ul').append("<li>Yellow</li>")
    });
});