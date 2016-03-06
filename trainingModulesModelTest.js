var TrainingModulesModel = require('./models/trainingModule.js');

var TrainingModuleModel = getTrainingModule;

//getTrainingModule

var moduleID = 1;
var res = {};

TrainingModuleModel(moduleID,function(err,res){console.log(JSON.stringify(res))});
