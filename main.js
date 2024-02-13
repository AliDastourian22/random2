$('#menu-tab').mouseenter(function ()  {
    $('#menu-bar').fadeIn(100);
})
$('#log-tab').mouseout(function ()  {
    $('#menu-bar').fadeOut(200);
})

$('#right').click(function () {
    $('#story-animate').animate({'margin-left': "+=200px"}, 500)
})
$('#left').click(function () {
    $('#story-animate').animate({'margin-left': "-=200px"}, 500)
})
