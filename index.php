<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns = "http://www.w3.org/1999/xhtml" lang = "en" xml:lang = "en">
	<head>
		<title> Welcome | Auto Completer </title>
		
		<script type = "text/javascript" src = "js/jquery-1.7.2.min.js"></script>
		<script type = "text/javascript" src = "js/autocompleter.js"></script>
		<script type = "text/javascript">
			jQuery(document).ready( function ( $ ) {
				$("input.autocompleter").autocompleter({ search : 'search' });
			});
		</script>
	</head>
	
	<body>
		<h1>Autocompleter</h1>
		<input type = "text" name = "search" class = "autocompleter" />
	</body>
</html>