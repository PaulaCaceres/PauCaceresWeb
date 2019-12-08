$(document).ready(function(){

	  // Add smooth scrolling to all links in navbar + footer link
	  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {

	    // Prevent default anchor click behavior
	    event.preventDefault();

	    // Store hash
	    var hash = this.hash;

	    // Using jQuery's animate() method to add smooth page scroll
	    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
	    $('html, body').animate({
	      scrollTop: $(hash).offset().top
	    }, 900, function(){

	      // Add hash (#) to URL when done scrolling (default click behavior)
	      window.location.hash = hash;
	      });
	    } // End if
	  });


	

	// Initialize Tooltip
 	$('[data-toggle="tooltip"]').tooltip();

 	// Animate navbar
	$(".nav-item").mouseenter(function(){
	$(".item").animate({
		opacity: '0.6',
	});
	}); 
	$(".nav-item").mouseleave(function(){
		$(".item").animate({
			opacity: '1',
		});
	}); 

 	// Animate titles
	$("#title1").mouseenter(function(){
		$("#title1").animate({
			opacity: '0.6',
		});
	}); 
	$("#title1").mouseleave(function(){
		$("#title1").animate({
			opacity: '1',
		});
	}); 


	$("#title2").mouseenter(function(){
		$("#title2").animate({
			opacity: '0.6',
		});
	}); 
	$("#title2").mouseleave(function(){
		$("#title2").animate({
			opacity: '1',
		});
	}); 

	$("#title3").mouseenter(function(){
	$("#title3").animate({
		opacity: '0.6',
	});
	}); 
	$("#title3").mouseleave(function(){
		$("#title3").animate({
			opacity: '1',
		});
	}); 

	$("#title4").mouseenter(function(){
	$("#title4").animate({
		opacity: '0.6',
	});
	}); 
	$("#title4").mouseleave(function(){
		$("#title4").animate({
			opacity: '1',
		});
	}); 

	$("#title5").mouseenter(function(){
	$("#title5").animate({
		opacity: '0.6',
		});
	}); 
	$("#title5").mouseleave(function(){
		$("#title5").animate({
			opacity: '1',
		});
	}); 

	// Animate arrows
	$("i").mouseenter(function(){
	$(".arrow").animate({
		opacity: '0.5',
	});
	}); 
	$("i").mouseleave(function(){
		$(".arrow").animate({
			opacity: '1',
		});
	}); 
});


// Stycky arrow
	// When the user scrolls the page, execute myFunction
	window.onscroll = function() {myFunction()};

	// Get the header
	var header = document.getElementsByClassName("f_backtotop");

	// Get the offset position of the navbar
	var sticky = header.offsetTop;

	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
	  if (window.pageYOffset > sticky) {
	    header.classList.add("sticky");
	  } else {
	    header.classList.remove("sticky");
	  }
	}