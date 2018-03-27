(function(){
  'use strict';

  var express = require('express');
  var app = express();
  var http =require('http');
  var configs = require('./configs/configs');
  var mongoose = require('mongoose');
  var request = require('request');
  var user = require('./models/employee');
  var bodyParser = require('body-parser');
    var path = require("path");
    try{
        mongoose.connect('mongodb://'+configs.dbHost+'/'+configs.dbName);
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            console.log('open connection')
        });
    }catch(e){
        console.log(e);
    }



  app.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', true);
      next();
  });

   app.set('PORT',process.env.PORT || '8000');
   app.set('views',__dirname+'/public');
   app.set('view engine', 'ejs');
   app.engine('html', require('ejs').renderFile);
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: true}));
   app.use(express.static(__dirname + '/public'));
   app.use('/img',express.static(__dirname+'/public/assets/img'));
   app.use('/css',express.static(__dirname+'/public/assets/css'));
   app.use('/js',express.static(__dirname+'/public/assets/js'));
   app.use('/dist',express.static(__dirname+'/public/assets/dist'));
   /*require('./apis/routingApis')(app,request,configs,user);*/
  

   app.get('/',function(req,res){
     res.render('index');
   });

   

  app.listen(app.get('PORT'),function(){
      console.log('all magic happens at port '+app.get('PORT'));
  });

})();

