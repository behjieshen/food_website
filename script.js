var transparent = true;
$(document).ready(function() {
  $('.hero').fadeOut(1);
  $('.hero').fadeIn(1200);
  if($(window).width() < 767) {
    $('.card-price').removeClass('card-price-best-deal');
  }
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

  $(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
        $('.navbar-collapse').collapse('hide');
    });
  });
  $('#contact_form').bootstrapValidator({
    // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      name: {
        validators: {
          stringLength: {
            min: 2,
          },
          notEmpty: {
            message: 'Please supply your name'
          }
        }
      },
      email: {
        validators: {
          notEmpty: {
            message: 'Please supply your email address'
          },
          emailAddress: {
            message: 'Please supply a valid email address'
          }
        }
      },
      title: {
        validators: {
          stringLength: {
            min: 2,
          },
          notEmpty: {
            message: 'Please supply a title for your message'
          }
        }
      },
      message: {
        validators: {
          stringLength: {
            min: 10,
            max: 200,
            message: 'Please enter at least 10 characters and no more than 200'
          },
          notEmpty: {
            message: 'Please supply a description of your project'
          }
        }
      }
    }
  })

  .on('success.form.bv', function(e) {
    $('#success_message').slideDown({
        opacity: "show"
      }, "slow") // Do something ...
    $('#contact_form').data('bootstrapValidator').resetForm();

    // Prevent form submission
    e.preventDefault();

    // Get the form instance
    var $form = $(e.target);

    // Get the BootstrapValidator instance
    var bv = $form.data('bootstrapValidator');

    // Use Ajax to submit form data
    $.post($form.attr('action'), $form.serialize(), function(result) {
      console.log(result);
    }, 'json');
  });
});