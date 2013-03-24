var new_exp = {
  picture_source  : null,
  destination_type: null,
  
  db        : null,
  sql_create: null,
  sql_drop  : null,
  
  init: function(){
    new_exp.picture_source    = navigator.camera.PictureSourceType;
    new_exp.destination_type  = navigator.camera.DestinationType;
    
    new_exp.sql_create  = 'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name, comments, image_url, lat, lng)'; 
    new_exp.sql_drop    = 'DROP TABLE IF EXISTS Users'; 
    
    new_exp.db = window.openDatabase("db_sample", "1.0", "Sample Database", 1000000);
    
    navigator.geolocation.getCurrentPosition(function(position){ 
      $('#lat').val(position.coords.latitude);
      $('#lng').val(position.coords.longitude);
    }, function(error){
      // show error
    });
    
    new_exp.bind_events();
  },
  
  insert_success: function(){
    $('#image_preview').hide();
    $('#user_comments').val('');
    $('#image').val('');
    
    alert('Dados salvos com sucesso.');
  },
  
  sql_error: function(){
    
  },
  
  bind_events: function(){
    $('.nav_upload_image').on('click', new_exp.nav_upload_image_click);
    $('#btn_save').on('click', new_exp.save);
  },
  
  save: function(event){
    event.preventDefault();
    
    var data = [];
    data.push( 'Ivo Rafael' );
    data.push( $('#user_comments').val() );
    data.push( $('#image').val() );
    data.push( $('#lat').val() );
    data.push( $('#lng').val() );
    
    new_exp.db.transaction(function(tx){
      tx.executeSql(new_exp.sql_drop);
      tx.executeSql(new_exp.sql_create);
      tx.executeSql('INSERT INTO Users (name, comments, image_url, lat, lng) VALUES (?, ?, ?, ?, ?)', data);
    }, new_exp.sql_error, new_exp.insert_success);
  },
  
  nav_upload_image_click: function(event){
    event.preventDefault();
    
    var source = $(event.currentTarget).data('source');
        source = new_exp.picture_source[source];

    var picture_params = { 
      quality         : 50, 
      destinationType : new_exp.destination_type.FILE_URI,
      sourceType      : source 
    };

    navigator.camera.getPicture(new_exp.upload_image_success, new_exp.upload_image_error, picture_params);
  },
  
  upload_image_success: function(img_src){
    $('#image_preview').css('display', 'block').attr('src', img_src);
    $('#image').val(img_src);
  },
  
  upload_image_error: function(message){
    console.log(message);
  }
};