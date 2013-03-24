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
}









//----------------------------------------------------------------------------------------------------
// Basic structure
//----------------------------------------------------------------------------------------------------

// var pictureSource
//   , destinationType
//   , db
//   , imageConfig1
//   , imageConfig2
//   , sqlCreate
//   , sqlDrop
//   ;
// 
// $(function(){ 
//   document.addEventListener("deviceready",onDeviceReady,false);
// });
// 
// function onDeviceReady() {
//   pictureSource   = navigator.camera.PictureSourceType;
//   destinationType = navigator.camera.DestinationType;
//   imageConfig1    = { quality: 50, destinationType: destinationType.DATA_URL };
//   imageConfig2    = { quality: 20, allowEdit: true, destinationType: destinationType.DATA_URL };
//   sqlDrop         = 'DROP TABLE IF EXISTS Users';
//   sqlCreate       = 'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name, description, image_url, lat, lng)';
//   
//   bindUIEvents();
//   checkAvailableMenus();
// 
//   navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
// 
//   db = window.openDatabase("db_sample", "1.0", "Sample Database", 1000000);
//   db.transaction(insert, sqlError, insertSuccess);
// }
// 
// function bindUIEvents() {
//   // Camera listeners
//   $('#cam'          ).on('click', capturePhoto      );
//   $('#editable_cam' ).on('click', capturePhotoEdit  );
//   $('#lib'          ).on('click', getPhoto          );
//   $('#album'        ).on('click', getPhoto          );
//   
//   // Connectivity listeners
//   $(window).on('online' , checkAvailableMenus);
//   $(window).on('offline', checkAvailableMenus);
//   
//   // Database listeners
//   $('#data_cam').on('click', getExperienceImage);
//   $('#data_lib').on('click', getExperienceImage);
//   
//   // Fake console listener
//   $('#run-command-line').on('click', function(event){
//     var el  = $('#command-line'),
//         val = el.val(); 
//     
//     foolog( val + ': ' + eval(val).toString());
//     el.val('');
//   });
// }
// 
// function checkAvailableMenus (event) {
//   if(!navigator.onLine){
//     $('#main-menu a').addClass('ui-disabled');
//     $('#main-menu a:last-child').removeClass('ui-disabled');
//   }else{
//     $('#main-menu .ui-disabled').removeClass('ui-disabled');
//   }
// }
// 
// function foolog (message) {
//   var foo = $('#console_data').val(),
//       bar = foo + '\n' + message.toString();
//   
//   $('#console_data').val(bar);
// }
// 
// //----------------------------------------------------------------------------------------------------
// // Database Methods
// //----------------------------------------------------------------------------------------------------
// 
// function insert (tx) {
//   var data  = [];
//       data.push([ 'Ivo Rafael', 'Phonegap #naotempreco', 'http://www.kinvey.com/images/PhoneGapLogo.png', '37.33233141', '-122.0312186' ]);
//       data.push([ 'Adriano Souza', 'Facebook connect #naotempreco', 'http://cache.lifehacker.com/assets/images/34/2008/05/01AwcA9gmx8cYAAAADAAAAAAAAAAA-.png', '37.33233141', '-122.0312186' ]);
//       data.push([ 'Fabio Kalaf', 'IOS #naotempreco', 'http://cdn.macrumors.com/article-new/2012/09/ios_6_feature_icons.jpg', '37.33233141', '-122.0312186' ]);
//       data.push([ 'Diego Tres', 'Cache manifest #naotempreco', 'http://www.mehdi-khalili.com/get/blogpictures/wdyk-offline-web/cache-manifest-sample.png', '37.33233141', '-122.0312186' ]);
//       data.push([ 'Willian Lepinki', 'Foundation #naotempreco', 'http://www.webmonkey.com/wp-content/uploads/2013/03/foundation4.jpg', '37.33233141', '-122.0312186' ]);
//       data.push([ 'Roy Nelson', 'Fogbugs #naotempreco', 'http://www.fogcreek.com/images/FogBugz//Features/EnterCases_small.png', '37.33233141', '-122.0312186' ]);
//   
//   tx.executeSql(sqlDrop);
//   tx.executeSql(sqlCreate);
//   for(var i in data){
//     tx.executeSql('INSERT INTO Users (name, description, image_url, lat, lng) VALUES (?, ?, ?, ?, ?)', data[i]);
//   }
// }
// 
// function insertSuccess () {
//   db.transaction(list, sqlError);
// }
// 
// function sqlError (err) {
//   for (var e in err){
//     foolog('sqlError.' + e + ': ' + err[e]);
//   }
// }
// 
// function list (tx) {
//   tx.executeSql(sqlCreate);
//   tx.executeSql('SELECT * FROM Users', [], listSuccess, sqlError);
// }
// 
// function listSuccess (tx, results) {
//   // foolog(tx);
//   // foolog(results);
//   // foolog(results.rows);
//   // foolog(results.rows.length);
//   // foolog();
//   
//   for(var i = 0; i < results.rows.length; i++){
//     var item = results.rows.item(i);
//     var html = '<strong>' + item.name + '</strong><br><img src="' + item.image_url + '"><p>' + item.description + '</p><hr>';
//     $('#data_content').append(html);
//   }
// }
// 
// function update (data) {
//   // body...
// }
// 
// function remove (id) {
//   // body...
// }
// 
// function getExperienceImage (event) {
//   event.preventDefault();
//   
//   var source = $(event.currentTarget).data('source');
//       source = pictureSource[source];
//   var config = { quality: 50, sourceType: source, destinationType: 1 };
// 
//   navigator.camera.getPicture(getExperienceImageSuccess, onPhotoFail, config);
// }
// 
// function getExperienceImageSuccess (imgSrc) {
//   $('#sampleImage').css('display', 'block').attr('src', imgSrc);
//   $('#user_image_url').attr('src', imgSrc);
// }
// 
// 
// //----------------------------------------------------------------------------------------------------
// // Geolocation Methods
// //----------------------------------------------------------------------------------------------------
// 
// function onGeoSuccess(position) {
//   var geolocationInfo = ''  +
//       'Latitude: '          + position.coords.latitude          + '<br>' +
//       'Longitude: '         + position.coords.longitude         + '<br>' +
//       'Altitude: '          + position.coords.altitude          + '<br>' +
//       'Accuracy: '          + position.coords.accuracy          + '<br>' +
//       'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '<br>' +
//       'Heading: '           + position.coords.heading           + '<br>' +
//       'Speed: '             + position.coords.speed             + '<br>' +
//       'Timestamp: '         + position.timestamp
//   ;
//   
//   $('#lat').val(position.coords.latitude);
//   $('#lng').val(position.coords.longitude);
//   $('#geolocation_info').html(geolocationInfo);
// }
// 
// function onGeoError(error) {
//   var geolocationInfo = ''  +
//       'code: '              + error.code    + '<br>' +
//       'message: '           + error.message
//   ;
// 
//   $('#geolocation_info').html(geolocationInfo);
// }
// 
// //----------------------------------------------------------------------------------------------------
// // Camera Methods
// //----------------------------------------------------------------------------------------------------
// 
// function onPhotoDataSuccess(imageData) {
//   var smallImage = $('#smallImage');
//   smallImage.css('display', 'block');
//   smallImage.attr('src', "data:image/jpeg;base64," + imageData);
// }
// 
// function onPhotoURISuccess(imageURI) {
//   var largeImage = $('#largeImage');
//   largeImage.css('display', 'block');
//   largeImage.attr('src', imageURI);
// }
// 
// function capturePhoto() {
//   navigator.camera.getPicture(onPhotoDataSuccess, onPhotoFail, imageConfig1);
// }
// 
// function capturePhotoEdit() {
//   navigator.camera.getPicture(onPhotoDataSuccess, onPhotoFail, imageConfig2);
// }
// 
// function getPhoto(event) {
//   var source = $(event.currentTarget).data('source');
//       source = pictureSource[source];
// 
//   navigator.camera.getPicture(onPhotoURISuccess, onPhotoFail, { quality: 50, 
//     destinationType: destinationType.FILE_URI,
//     sourceType: source });
// }
// 
// function onPhotoFail(message) {
//   alert('Failed because: ' + message);
// }
