//===================================================================================
//= require "_includes/jquery-1.9.1.min"
//===================================================================================
//= require "_includes/jquery.mobile-1.3.0.min"
//===================================================================================
//= require "_includes/cordova-2.5.0"
//===================================================================================
// require "_includes/cdv-plugin-fb-connect"
// require "_includes/facebook_js_sdk"
//= require "_includes/new_experience"
//= require "_includes/feed"
//===================================================================================
//= require "_includes/index"
//===================================================================================
//= require_self


function foolog (message) {
  var foo = $('#console_data').val(),
      bar = foo + '\n' + message.toString();
  
  $('#console_data').val(bar);
}
