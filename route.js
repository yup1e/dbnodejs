exports.list = function(req, res){
  req.getConnection(function(err,connection){
     connection.query('SELECT * FROM category',function(err,rows)     {
        if(err)
           console.log("Error Selecting : %s ",err );
            res.render('viewcategory',{page_title:"Sample list view database",data:rows,customvar:req.app.get('customvar')});
         });
    });
};

exports.edit = function(req, res){
    var id = req.params.id;
    req.getConnection(function(err,connection){
        var query = connection.query('SELECT * FROM category WHERE category_id = ?',[id],function(err,rows)
        {
            if(err)
                console.log("Error Selecting : %s ",err );
            res.render('editcategory',{page_title:"Edit Category",data:rows});
         });
    }); 
};

exports.save = function(req,res){
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    req.getConnection(function (err, connection) {
        var data = {
            name    : input.category
        };
        
        connection.query("UPDATE category set ? WHERE category_id = ? ",[data,id], function(err, rows)
        {
            if (err)
              console.log("Error Updating : %s ",err );
          res.redirect('/');
        });
    });
};

exports.delete = function(req,res){
     var id = req.params.id;
     req.getConnection(function (err, connection) {
        connection.query("DELETE FROM category  WHERE category_id = ? ",[id], function(err, rows)
        {
             if(err)
                 console.log("Error deleting : %s ",err );
             res.redirect('/');
        });
     });
};

