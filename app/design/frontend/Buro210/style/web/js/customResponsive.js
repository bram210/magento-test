define([
	'jquery',
	'script',
	'matchMedia',
	'mage/tabs',
	'Magento_Ui/js/modal/modal',
	'mage/translate',
	'domReady!'
], function ($) {
	'use strict';

	//Create model check function
	$.fn.isModelCheck = function() {
		return !!this.parent('.modal-content').length;
	};

	var filterSel = $('.block.filter');

	//Create current position function
	// Gets direct parent and that parent in string
	$.fn.currentPosition = function() {
		var position = '';
		    position += '.';
		    position += $(this).parent().parent().attr('class').split(' ').join('.');
		    position += ' ';
		    position += '.';
		    position += $(this).parent().attr('class').split(' ').join('.');

		return position;
	};

	//Create insertAt function
	// Inserts element at the defined index numer.
	$.fn.insertAt = function(index, element) {
	  var lastIndex = this.children().size();
	  if (index < 0) {
	    index = Math.max(0, lastIndex + 1 + index);
	  }
	  this.append(element);
	  if (index < lastIndex) {
	    this.children().eq(index).before(this.children().last());
	  }
	  return this;
	}

	// Create vars for checking
	if (filterSel.length){ 
		var filterPosition = filterSel.currentPosition();
		var filterIndex = filterSel.index();
	};

	// console.log(filterSel);

	mediaCheck({
		media: '(min-width: 780px)',
		// Switch to Desktop Version
		entry: function () {
			console.log('entry 780+');


			//Check if filter is on page
			if (filterSel.length){
				if (filterSel.isModelCheck()) {
					//Close model if still open 
					$('.block.filter').modal('closeModal');
					//Move filter to old filter position
					$(filterPosition).insertAt(filterIndex, filterSel);
					//Remove action open action
					$('.action.open-filter-model').remove();
				}
			};
		},
		// Switch to Mobile Version
		exit: function () {
			console.log('exit 780+');

			//Check if filter is on page
			if (filterSel.length){
				if (!$('.modal-slide.filter-model').length) {
					//Set .block.filter inside model
					$('.block.filter').modal({
						type: 'slide',
						modalClass: 'filter-model',
						buttons: false
					});
				} else {
					//If model exists move filter block outside of model
					$(".block.filter").appendTo(".modal-slide.filter-model .modal-inner-wrap .modal-content");
				}
				//Create button to open model filter
				$( '<button class="action primary open-filter-model" onclick="">' + $.mage.__('Filter de producten') + '</button>' ).prependTo( $( '.column.main' ) );
				//Add open action to button
				$('.action.open-filter-model').click(function() {
					$('.block.filter').modal('openModal');
				});
			}
		}
	});
});
