var TrainingModulesModel = require('./models/trainingModule.js');

var TrainingModuleModel = new GetModuleController();

//getTrainingModule

var moduleID = 1;
var res = {};

TrainingModuleModel.getTrainingModule(moduleID,function(err,res){console.log(JSON.stringify(res))});
