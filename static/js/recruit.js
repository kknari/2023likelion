// 자주 묻는 질문

var qcard1 = document.querySelector(".qcard1");
var qcard2 = document.querySelector(".qcard2");
var qcard3 = document.querySelector(".qcard3");
var qcard4 = document.querySelector(".qcard4");
var qcard5 = document.querySelector(".qcard5");

var plus1 = document.querySelector("#plus1");
var plus2 = document.querySelector("#plus2");
var plus3 = document.querySelector("#plus3");
var plus4 = document.querySelector("#plus4");
var plus5 = document.querySelector("#plus5");

var a1 = document.querySelector(".a1");
var a2 = document.querySelector(".a2");
var a3 = document.querySelector(".a3");
var a4 = document.querySelector(".a4");
var a5 = document.querySelector(".a5");

qcard1.addEventListener('click',function(){
    qcard1.classList.toggle('colorChange');
    plus1.classList.toggle('plusRotate');
    a1.classList.toggle('showText');
});

qcard2.addEventListener('click',function(){
    qcard2.classList.toggle('colorChange');
    plus2.classList.toggle('plusRotate');
    a2.classList.toggle('showText');
});

qcard3.addEventListener('click',function(){
    qcard3.classList.toggle('colorChange');
    plus3.classList.toggle('plusRotate');
    a3.classList.toggle('showText');
});

qcard4.addEventListener('click',function(){
    qcard4.classList.toggle('colorChange');
    plus4.classList.toggle('plusRotate');
    a4.classList.toggle('showText');
});

qcard5.addEventListener('click',function(){
    qcard5.classList.toggle('colorChange');
    plus5.classList.toggle('plusRotate');
    a5.classList.toggle('showText');
});


// 스크롤 애니메이션

$(document).ready(function() {
    $(window).scroll( function(){
			
        $('.qcard1').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight()/2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},200);
            }
            
        }); 

        $('.qcard2').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight()/2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},200);
            }
            
        }); 

        $('.qcard3').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight()/2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},200);
            }
            
        }); 

        $('.qcard4').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight()/2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},200);
            }
            
        }); 

        $('.qcard5').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight()/2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},200);
            }
            
        }); 
    });
});