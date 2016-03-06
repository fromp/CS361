var TrainingModulesModel = require('./models/trainingModule.js');

//getTrainingModule

getTrainingModule(1,function(err,res){
    console.log(JSON.stringify(res));
})
