$(function(){
  var flag = 0;
  $('.fa-chevron-down').click(function(){
    flag = flag ? 0:1;
    $("#links").animate( { height: 'toggle' }, 'slow' );
    $('.fa-chevron-down').animate({zIndex:1},{
	     duration:500,
	      step:function(now){
          if(flag){
		        $(this).css({transform:'rotate(' + (now * 180) + 'deg)'});
          }else{
            $(this).css({transform:'rotate(' + (180 - (now * -180)) + 'deg)'});
          }
        },
        complete:function(){
		    }
      });

  });
});
