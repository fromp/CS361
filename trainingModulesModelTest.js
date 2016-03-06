var TrainingModulesModel = require('./models/trainingModule.js');

//getTrainingModule

var moduleID = 1;
var res = {};

TrainingModulesModel.getTrainingModule(moduleID,function(err,res){console.log(JSON.stringify(res))});
