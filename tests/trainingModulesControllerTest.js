var TrainingModulesController = require('../controllers/trainingModules.js');


function testListTrainingModulesHappyCase() { 
    var trainingModulesDataAccessor = {
        getTrainingModulesListing: function(callback) {
            callback(null, [
                "derp"
            ]);
        }
    };
    var trainingModulesController = new TrainingModulesController(trainingModulesDataAccessor);
    var res = {
        render: function(templateName, context) {
            if (templateName !== 'training-modules') {
                throw new Error(`Training modules controller rendered ${templateName} instead of training-modules in happy case.`);
            }
        }
    }
    try {
        trainingModulesController.index(null, res);
    } catch(err) {
        console.error(err);
    }
}
testListTrainingModulesHappyCase();

function testListTrainingModulesSadCase() {
    var trainingModulesDataAccessor = {
        getTrainingModulesListing: function(callback) {
            callback(new Error("I didn't connect to the DB ?? !! :("), null);
        }
    };
    var trainingModulesController = new TrainingModulesController(trainingModulesDataAccessor);
    var res = {
        render: function(templateName, context) {
            if (templateName !== '500') {
                throw new Error(`Training modules controller rendered ${templateName} instead of 500 in sad case.`);
            }
        }
    }
    try {
        trainingModulesController.index(null, res);
    } catch(err) {
        console.error(err);
    }
}
testListTrainingModulesSadCase();


