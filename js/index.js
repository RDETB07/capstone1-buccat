function switchStyle() {
	if (document.getElementById('styleSwitch').checked) {
		document.getElementById('gallery').classList.add("custom");
		document.getElementById('exampleModal').classList.add("custom");
	} else {
		document.getElementById('gallery').classList.remove("custom");
		document.getElementById('exampleModal').classList.remove("custom");
	}
}

AOS.init({
	easing: 'ease-in-out-sine'
});

//Get the button
var mybutton = document.getElementById("go-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}