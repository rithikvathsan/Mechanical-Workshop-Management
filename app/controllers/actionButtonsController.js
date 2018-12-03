var mysql = require('mysql');
var connectionInfo = require('.././database/connection.js');

module.exports = {
  addElement : function(req, res, next){
    var name = req.body.nombre;
    var manufacturer = req.body.fabricante;
    var action = req.body.boton; //get the action: add, update or delete

    if(action==="add"){
      var connection = mysql.createConnection(connectionInfo);
      var id;

      connection.query('SELECT MAX(ID) AS id FROM `dbo.tPiezas`',function(err, result, fields) {
      if(!err){
        id = result[0].id;
        console.log(req.body);
        var values = {};
        values.ID = id+1;
        values.NOMBRE = name;
        values.FABRICANTE = manufacturer;
        values.ID_TIPO = "A";
        console.log(values);

        var valuess = [24, 'as','as','sdf'];
          //var values = {id: id+1,name : name, manufacturer : manufacturer, tipo : name};
        connection.query('INSERT INTO `dbo.tPiezas` SET ?',[values],function(err, result, fields) {
            if (!err) {
                    console.log('Successfully added information.');
                    console.log(err);
                } else {
                    console.log(result);
                    console.log(err);
                    console.log('Was not able to add information to database.');
                }
            connection.end();
          });

          }
        });

        res.redirect('/');
        }
        else if(action==="update"){

        }
        else if(action==="delete"){

        }

  }


  }
