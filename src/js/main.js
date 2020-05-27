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

    $( '.slider-container' ).css( 'margin-left', ( ( index ) * -25 + 25 ) + '%'  );

  } );

  $( '.mobile-menu-button' ).click( function(){
    $( '.mobile-menu' ).toggleClass( 'active' );
  } );
  
});