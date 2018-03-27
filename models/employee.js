(function(){
	"use strict";
    var mongoose = require('mongoose');

	  var EmployeeSchema = new mongoose.Schema({
	  name: String,
	  address: String,
	  position: String,
	  salary: Number,
	  updated_at: { type: Date, default: Date.now },
	});
    
    var Employee =  mongoose.model('Employee', EmployeeSchema);
    module.exports = Employee;

})();
