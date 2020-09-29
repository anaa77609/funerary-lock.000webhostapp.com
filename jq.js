$(document).ready(function()
{
	
$('#k').css("display","none");
$('#menu-bar li').hover(function() {
$(this).find('ul').stop(true, true).slideDown('slow');
}, function() {
$(this).find('ul').stop(true,true).hide();
});

	console.log("bla");
});

$(document).ready(function() {
    
    var showChar = 100;  
    var ellipsestext = "...";
    var moretext = "Više >>";
    var lesstext = "Manje <<";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});

$(document).ready(function()
{
	$('#menu-bar li').hover(function()
	{
		$(this).animate({paddingLeft: '+=70px'},700);
	},function()
	{
		$(this).animate({paddingLeft: '-=70px'},700);
	});
});

$(document).ready(function(){
	$("#tbime").focus(function(){ $(this).css("border","2px solid red")});
	$("#tbprezime").focus(function(){ $(this).css("border","2px solid red")});
	$("#tbKorIme").focus(function(){ $(this).css("border","2px solid red")});
	$("#tbemail").focus(function(){ $(this).css("border","2px solid red")});
	$("#tbLozinka1").focus(function(){ $(this).css("border","2px solid red")});
});

$(document).ready(function(){
   $(window).scroll(function(){
   
		var skrolovano = $(this).scrollTop();

		if(skrolovano > 300){
			$('#scrollToTop').fadeIn();
		} else {
			$('#scrollToTop').fadeOut();
		}

	});
   $('#scrollToTop').click(function(){

   
        $('html').animate({
            scrollTop: 0
        }, 1000);
    });

});
