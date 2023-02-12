//jQuery
$(window).resize(function(){
    var winWidth = $(window).width();
    var boxWidth = $('.sctimg1').width();
    //max-width값인 500px아래서만 작동
    if(winWidth <= 500){
    	//1.681:1
        $('.sctimg1').height(boxWidth*0.681);
    }
});