$(document).ready(function() {

  $('.band-content').magnificPopup({type:'image'});
  $('.band-content').appear();

  $(document.body).on('appear', '.band-content', function(e, $affected) {
    $(this).addClass( 'animated pulse' );
  });

  $(window).scroll();
  AOS.init();

  function window_resize(){
    $('.window-width').text( $( window ).width() + 'px' );
    $( '.pagination .dot' ).eq( 0 ).click();
  }

  $( window ).resize( function(){
    window_resize();
  } );

  $( window ).on( 'load', function(){
    window_resize();
  });

  $( '.pagination .dot' ).click( function() {
    $( this ).addClass( 'active' ).siblings().removeClass( 'active' );
    
    var index = $(this).index();
    var slide_width = parseInt( $( '.slide' ).eq( 0 ).css( 'width' ) );
    var containerOuterWidth = parseInt( $( '.testimonials-section .container' ).eq( 0 ).outerWidth() );
    var windowWidth = $( window ).width();
    var slideMargin = ( windowWidth - containerOuterWidth ) / 2 + 50;
    var new_slider_container_mleft = slide_width * -index + slideMargin;
    
    
    $( '.slider-container' ).css( 'margin-left', new_slider_container_mleft  );

  } );

  $( '.slider-container .slide' ).click( function(){
    $( '.pagination .dot' ).eq( $( this ).index() ).click();
  } );

  $( '.mobile-menu-button' ).click( function(){
    $( '.mobile-menu' ).toggleClass( 'active' );
  } );
  
});