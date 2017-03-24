var transparent = true;
$(document).ready(function() {
  $('.hero').fadeOut(1);
  $('.hero').fadeIn(1200);
  $(document).scroll(function() {
    if( $(this).scrollTop() >= $(window).height() ) {
      if(transparent) {
        transparent = false;
        $('.navbar').addClass('navbar-fixed-top');
        $('.navbar-logo img').addClass('nav-img');
        $('.navbar-header').addClass('navbar-color');
        $('.navbar-collapse').addClass('navbar-color');
        $('.navbar-default .navbar-toggle .icon-bar').css('background-color', '#FFFFFF');
        var divs = document.querySelectorAll('.main-nav li a');
        for (var i = 0; i < divs.length; i++) {
            divs[i].classList.add('black-font');
        }
      }
    } else {
      if( !transparent ) {
        transparent = true;
        $('.navbar').removeClass('navbar-fixed-top');
        $('.navbar-logo img').removeClass('nav-img');
        $('.navbar-header').removeClass('navbar-color');
        $('.navbar-collapse').removeClass('navbar-color');
        $('.navbar-default .navbar-toggle .icon-bar').css('background-color', '#E67E22');
        var divs = document.querySelectorAll('.main-nav li a');
        for (var i = 0; i < divs.length; i++) {
            divs[i].classList.remove('black-font');
        }
      }
    }
  });
});