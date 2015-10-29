// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require spin
//= require jquery.spin
//= require gritter
//= require react
//= require react_ujs
//= require ckeditor/init
//= require jquery_nested_form
//= require jquery-ui
//= require components
//= require_tree .

$(document).ajaxError(function(event, request) {
  var msg = JSON.parse(request.responseText);
  if (msg) msg.forEach(function(e) {
  	$.gritter.add({ title: 'Error', text: e });
  })
});

var ready;
ready = function() {
	$('#profile').click(function(e) {
		e.preventDefault;
    $('.profile_nav').fadeToggle();
    $('.nav-choice').toggleClass('fa-arrow-down');
		$('.nav-choice').toggleClass('fa-arrow-up');
	});
   $("#tabs").tabs();
}

$(document).ready(ready)
$(document).on('page:load', ready)


