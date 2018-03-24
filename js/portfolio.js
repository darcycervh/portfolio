$(document).ready(function(){
  var $more = $('.more');
  var $back = $('.back');
  $('.more').click(function(){
    $('.back').addClass('active');
    $('.front').removeClass('active');
  })
  $('.go-back').click(function(){
    $('.back').removeClass('active');
    $('.front').addClass('active');
  })
})