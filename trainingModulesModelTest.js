var TrainingModulesModel = require('./models/trainingModule.js');

var TrainingModuleModel = new TrainingModulesModel();

//getTrainingModule

var moduleID = 1;
var res = {};

TrainingModuleModel.getTrainingModule(moduleID,function(err,res){console.log(JSON.stringify(res))});
