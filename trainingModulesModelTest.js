var trainingModule = require('./models/trainingModule.js');

//var TrainingModuleModel = new GetModuleController();

//getTrainingModule

var moduleID = 1;
var res = {};

trainingModule.getTrainingModule(moduleID,function(err,res){console.log(JSON.stringify(res))});
