$(function(){
  document.addEventListener("deviceready",onDeviceReady,false);

  $('#run-command-line').on('click', function(event){
    var el  = $('#command-line'),
        val = el.val();

    foolog( val + ': ' + eval(val).toString());
    el.val('');
  });
});

function onDeviceReady() {
  new_exp.init();
  feed.init();
};