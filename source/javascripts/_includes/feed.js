var feed = {
  db: null,
  sql_create: null,

  init: function(){
    feed.template =  '<li>' +
                    '<div class="header">' +
                    '  <figure>' +
                    '    <img src="https://graph.facebook.com/665377662/picture" alt="">' +
                    '    <figcaption>#name' +
                    // '      Adriano Fernandes' +
                    // '      <p>São Paulo - SP</p>' +
                    '    </figcaption>' +
                    '  </figure>' +
                    '</div>' +
                    '<figure class="experience_image">' +
                    '  <img src="#image" alt="">' +
                    '  <figcaption>#comment' +
                    // '    Menu degustação IMPECÁVEL. Vieiras Canadenses, Anchovas Negras e o melhor kobe Beef que eu já provei em um restaurante japonês. #naotempreco' +
                    '  </figcaption>' +
                    '</figure>' +
                    '</li>';
    
    
    $('#feed').bind('pageshow', feed.fetch);
    feed.sql_create  = 'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name, comments, image_url, lat, lng)'; 
    feed.fetch();
  },
  
  fetch: function(){
    foolog('fetch');
    
    feed.db = window.openDatabase("db_sample", "1.0", "Sample Database", 1000000);
    feed.db.transaction(function(tx){
      foolog('select');
      tx.executeSql(feed.sql_create);
      tx.executeSql('SELECT * FROM Users ORDER BY id DESC', [], feed.fetch_complete, feed.sql_error);
    }, feed.sql_error);
  },
  
  fetch_complete: function(tx, results){
    // foolog('fetch_complete');
    // foolog(tx);
    // foolog(results);
    // foolog(results.rows);
    // foolog(results.rows.length);
    
    var html = '';
    
    for(var i = 0; i < results.rows.length; i++){
      var item      = results.rows.item(i);
      var html_item = feed.template;
      html_item = html_item.replace(/#name/g    , item.name);
      html_item = html_item.replace(/#comment/g, item.comments);
      html_item = html_item.replace(/#image/g   , item.image_url);

      html = html + html_item;
    }
    
    $('.cards_list').html(html);
  },
  
  sql_error: function(err){
    alert('error: ' + err.message);
  }
  
  
};

//   var item = results.rows.item(i);
//   var html = '<strong>' + item.name + '</strong><br><img src="' + item.image_url + '"><p>' + item.description + '</p><hr>';
//   $('#data_content').append(html);
