if ( typeof Object.create !== 'function' ) {
	
	Object.create = function ( obj ) {
		
		function F ( ) { };
		F.prototype = obj;
		
		return new F ( );
		
	};

}

(function ( $, window, document, undefined ) {

	var Autocompleter = {
	
		init : function ( options, elem ) {
			
			var self = this;
			
			self.elem = elem;
			self.$lem = $( elem );
			
			self.url = 'http://www.example.com/';
			
			if ( typeof options === 'string' ) {
					
				self.search = options.search;		
				
			}
			else {
				
				self.search = options.search;
				self.options = $.extend( {}, $.fn.autocompleter.options, options )
				console.log(self.options);
			}
			
		}
		
	};
	
	$.fn.autocompleter = function ( options ) {
		
		return this.each( function ( ) {
		
			var autocompleter = Object.create( Autocompleter );
			
			autocompleter.init( options, this);
			
		});
		
	};
	
	$.fn.autocompleter.options = {
		search : 'test'
	
	};
	
}) ( jQuery, window, document );