$(window).scroll(function(){
    if($(window).scrollTop() >= $(document).height() - $(window).height()-500){
$('.container').append('<div></div>');
    }
});