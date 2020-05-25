$(function() {


  $('#GetInTouch-show').click(function() {
    $('#GetInTouch-modal').fadeIn();
  });
  $('#GetInTouch-form-close').click(function() {
    $('#GetInTouch-modal').fadeOut();
  });

  $('#menu-show').click(function(){
    var $menu = $('.menu');
    if($menu.hasClass('open')){
      $menu.removeClass('open');
      $menu.slideUp();

    }else{
      $menu.addClass('open');
        $menu.slideDown();
      }
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});






});
