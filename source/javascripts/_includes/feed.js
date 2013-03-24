var feed = {
  db: null,

  init: function(){
    $('#feed').on('pageshow', feed.fetch);
  },
  
  fetch: function(){
    feed.db = window.openDatabase("db_sample", "1.0", "Sample Database", 1000000);
    feed.db.transaction(function(tx){
      tx.executeSql(sqlCreate);
      tx.executeSql('SELECT * FROM Users', [], feed.fetch_complete, function(err){ });
    }, null);
  },
  
  fetch_complete: function(tx, results){
    for(var i = 0; i < results.rows.length; i++){
      foolog(item.name);
      foolog(item.comments);
      foolog(item.image_url);
      foolog(item.lat + ', ' + item.lng);
      foolog('-----------------');
    }
  }
};

//   var item = results.rows.item(i);
//   var html = '<strong>' + item.name + '</strong><br><img src="' + item.image_url + '"><p>' + item.description + '</p><hr>';
//   $('#data_content').append(html);
