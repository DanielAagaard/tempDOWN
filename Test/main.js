$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 1){
            $(".topbar").css({"opacity" : "0"})
        }
        else {
            $(".topbar").css({"opacity" : "1"})
        }
    })
})