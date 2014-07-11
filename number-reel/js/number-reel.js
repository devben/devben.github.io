/* ==========================================================
 * number-reel.js
 * ==========================================================
 * Copyright 2013 Ben Harrison.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


;(function($, undefined) {
	"use strict";

	var pluginName = 'numberReel';



	$.fn[pluginName] = function(options) {
		
		
		 var opts = $.extend( {}, $.fn[pluginName].defaults, options );
		 
		 return this.each(function() {
			
				
			var  $this = $(this)
				,html = $this.html()
				,numbers = html.split('')
				,infinite = $this.data('infinite');
			
			if (opts.infinite === true || infinite === true){
				$this.addClass('infinite');
			}
			
			$this.addClass(opts.wrapperCss);
			
			
			
			
			
			Array.prototype.shuffle = function() {
				var i = this.length, j, temp;
				if ( i == 0 ) return this;
				while ( --i ) {
				   j = Math.floor( Math.random() * ( i + 1 ) );
				   temp = this[i];
				   this[i] = this[j];
				   this[j] = temp;
				}
				return this;
			  }
			  
			
			  var reelArr = [];
			  for (var i = 0; i < opts.reelFace; i++) {
				reelArr.push('<i>' + [i] + '</i>');
			  };
			  
			  
			      	
					
			var reelHTML = $('<div>');
			
			
			if (opts.seperator === '') {
					reelHTML.append('<div class="reel-container">');
				}
				
				$.each(numbers, function(key, number) {
					if (key % 2 === 0) {
						var altClass = 1
					} else {
						var altClass = 2
					}
					
					//console.log(reelArr.shuffle().join(""));
					var reelTmp = '';
					//console.log(reelTmp);
					
					if (opts.seperator === '') {
						var reelTmp = $('<div class="reel-' + altClass + '"><i>' + number + '</i>' +  reelArr.shuffle().join("") + '</div>');
						reelHTML.children('.reel-container').append(reelTmp);
					} else {
						var reelTmp = $('<div class="reel-' + altClass + '"><i>' + number + '</i>' +  reelArr.shuffle().join("") + '</div>');
						reelHTML.append(reelTmp);
						
						if (key % 1 === 0) {
								reelTmp.wrap('<div class="reel-container">')
							} else {
						}
						
					}
					
				
										

				});
				
				if (opts.currency != '') {
					reelHTML.prepend('<div class="reel-container">' + opts.currency + '</div>')
				}
			
				
				
				
				
				$this.html(reelHTML);

			
		 });
	};



	
	
	// Plugin defaults added as a property on our plugin function.
	$.fn[pluginName].defaults = {
		wrapperCss: 'number-reel'
		, currency: '$'
		, infinite: false
		, reelFace: 9  //must be a positive integer 9
		, seperator: 'thousand'  // 'thousand','hundred' or false
	};


		



	$(function() {
		$('[data-trigger="' + [pluginName] + '"]')[pluginName]();
	});
})(jQuery);
