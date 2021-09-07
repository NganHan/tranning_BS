
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
		slides[i].classList.remove("active");
	}
	slides[slideIndex - 1].style.display = "block";
	slides[slideIndex - 1].classList.add("active");
	setTimeout(showSlides, 2000);
}
function myTabs(evt, name) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent__product");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks__product");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(name).style.display = "block";
	evt.currentTarget.className += " active";
}
function myTabs__search(evt, name) {
	//search
	var i, tablinks__search, tabcontent__search;
	tabcontent__search = document.getElementsByClassName("tabcontent__search");
	for (i = 0; i < tabcontent__search.length; i++) {
		tabcontent__search[i].style.display = "none";
	}
	tablinks__search = document.getElementsByClassName("tablinks__search");
	for (i = 0; i < tablinks__search.length; i++) {
		tablinks__search[i].className = tablinks__search[i].className.replace(" active", "");
	}
	document.getElementById(name).style.display = "block";
	evt.currentTarget.className += " active";
}
$(function () {

	//Scroll event
	$(window).scroll(function () {
		var scrolled = $(window).scrollTop();
		if (scrolled > 200) $('.go-top').fadeIn('slow');
		if (scrolled < 200) $('.go-top').fadeOut('slow');
	});

	//Click event
	$('.go-top').click(function () {
		$("html, body").animate({ scrollTop: "0" }, 500);
	});

});

