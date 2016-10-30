exports.list = function(req, res){
  req.getConnection(function(err,connection){
       
     connection.query('SELECT * FROM category',function(err,rows)     {
            
        if(err)
           console.log("Error Selecting : %s ",err );
     
            res.render('viewcategory',{page_title:"Sample list view database",data:rows});
                           
         });
       
    });
  
};
