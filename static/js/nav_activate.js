$(document).ready(function(){
    $('.navtxt').each(function(index){
        $(this).attr('navtxt-index', index);
    }).click(function(){
        var index = $(this).attr('navtxt-index');
        $('.navtxt[navtxt-index=' + index + ']').addClass('clicked_nav');
        $('.navtxt[navtxt-index!=' + index + ']').removeClass('clicked_nav');
    });


});