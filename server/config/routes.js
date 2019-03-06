// var names = require('../controllers/names.js')

module.exports = function(app){
    app.get('/test',(req,res)=>{
        res.sendFile(path.resolve("../../static/home.html"))
    }); 
}   