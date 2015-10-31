$(window).scroll(function() {
/**
 * Resize navbar on scroll (chota bada).
 */
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});
