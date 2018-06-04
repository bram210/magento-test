define([
  'jquery',
  'js/jquery.matchHeight',
  'js/jquery.readMore',
  'domReady!'
],
function($) {

jQuery.noConflict();


// $(function() {

// 	$('.home_row.home_categories .categorylist_wrapper').matchHeight({
// 		byRow: true,
// 		property: 'height',
// 		target: $('.home_row.home_categories .categorylist_wrapper .category_bg_wrapper'),
// 		remove: false
// 	});

// });



$(function() {
	
function matchHeightUpdate() {
	$.fn.matchHeight._update(); 
	$('.header .block-search .action.search').prop("disabled", false);
};
// All Matchheight fixed

	matchHeightUpdate();
	setTimeout(function() { matchHeightUpdate() }, 500);

$( document ).ajaxStart(function() {
	matchHeightUpdate();
	setTimeout(function() { matchHeightUpdate() }, 500);
});
$( document ).ajaxComplete(function() {
	matchHeightUpdate();
	setTimeout(function() { matchHeightUpdate() }, 500);
});
$( document ).ajaxSuccess(function() {
	matchHeightUpdate();
	setTimeout(function() { matchHeightUpdate() }, 500);
});

$('.block.related').change(function() {
	matchHeightUpdate();
	setTimeout(function() { matchHeightUpdate() }, 500);
});

setInterval(
     function(){   
        matchHeightUpdate();
     },
     10000  /* 10000 ms = 10 sec */
);

});

});
