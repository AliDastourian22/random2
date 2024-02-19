$('#menu-tab').mouseenter(function ()  {
    $('#menu-bar').fadeIn(100);
})
$('#log-tab').mouseleave(function ()  {
    $('#menu-bar').fadeOut(200);
})

$('#right').click(function () {
    $('#story-animate').animate({'margin-left': "+=200px"}, 500)
})
$('#left').click(function () {
    $('#story-animate').animate({'margin-left': "-=200px"}, 500)
})

function Slider() {
    if(nextslid>max){
        nextslid=0;
    }
    if(nextslid<min){
        nextslid=4;
    }

    slideritem.hide();
    slideritem.eq(nextslid).fadeIn(100);
    nextslid++;
}
function Slp() {

    if(nextslid<min){
        nextslid=4;
    }

    slideritem.hide();
    slideritem.eq(nextslid).fadeIn(100);
    nextslid--;
}
var max=4;
var min=0;
var slidertag =$('#slider-container')
var  slideritem=slidertag.find('.item')
var nextslid=0;
$('#click-right').click(function (){
    Slider();

});
$('#click-left').click(function (){
    Slp();
});

Slider();
var Timer = setInterval(function (){
    Slider();
},2500)

$('#left-2').click(function () {
    $('#phone-top-ul').animate({'margin-left': "-=350px"}, 800)
})
$('#right-2').click(function () {
    $('#phone-top-ul').animate({'margin-left': "+=350px"}, 800)
})

