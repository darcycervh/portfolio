$(document).ready(function(){
  // vistas del portafolio
  var $about = $('#about');
  var $portfolio = $('#portfolio');
  var $contact = $('#contact');
  // redireccionando a las siguientes vistas
  $('#about').on('click', function() {
    window.location.href = '../views/about.html';
  });
  $portfolio.on('click', function() {
    window.location.href = '../views/portfolio.html';
  });
  $contact.on('click', function() {
    window.location.href = '../views/contact.html';
  });
})