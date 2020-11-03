jQuery(document).ready(function ($) {
  setTimeout(function(){
		$('body').addClass('run_animations');
	},500);


  function activeItem(itemClassName, activeClassName) {
    $('body').on('click', itemClassName, function() {

      $(itemClassName).removeClass(activeClassName);
      $(this).addClass(activeClassName);
    });
  }
  activeItem('.header_right_lang_item', 'active');
  activeItem('.jury_year_wr', 'active');


  $('body').on('click', '.nominations_row_arrow_btn', function() {
    $('body').addClass('noscroll');
    $('.nominations_popup_wrap').addClass('visible');
  });
  $('body').on('click', '.nominations_popup_close_btn, .nominations_popup_close_txt', function() {
    $('body').removeClass('noscroll');
    $('.nominations_popup_wrap').removeClass('visible');
  });
});
