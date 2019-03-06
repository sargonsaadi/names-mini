// var names = require('../controllers/names.js')
var path =require('path');
var connection =require('../models/name');

module.exports = function(app){
    app.get('/test',(req,res)=>{
        connection.query('SELECT * FROM names;',(err,data)=>{
            if(!err){
                res.json({message: data})
            }else{
                res.json({message: 'error'})
            }
        })
    }); 
}   