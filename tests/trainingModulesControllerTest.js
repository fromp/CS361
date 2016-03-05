var TrainingModulesController = require('../controllers/trainingModules.js');


function testListTrainingModulesHappyCase() {
    var goodThingHappened = false;
    
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
            if (templateName === 'training-modules') {
                goodThingHappened = true;
            } else {
                throw new Error(`Training modules controller rendered ${templateName} instead of training-modules in happy case.`);
            }
        }
    };
    try {
        trainingModulesController.index(null, res);
        if (!goodThingHappened) {
            throw new Error('Response was not rendered with correct template (training-modules)');
        }
    } catch(err) {
        console.error('Test case failed.');
        console.error(err);
    }
}
testListTrainingModulesHappyCase();

function testListTrainingModulesSadCase() {
    var goodThingHappened = false;
    
    var trainingModulesDataAccessor = {
        getTrainingModulesListing: function(callback) {
            callback(new Error("I didn't connect to the DB ?? !! :("), null);
        }
    };
    var trainingModulesController = new TrainingModulesController(trainingModulesDataAccessor);
    var res = {
        render: function(templateName, context) {
            if (templateName === '500') {
                goodThingHappened = true;
            } else {
                throw new Error(`Response was rendered with ${templateName} instead of 500`);
            }
        }
    };
    try {
        trainingModulesController.index(null, res);
        if (!goodThingHappened) {
            throw new Error('Response was not rendered with correct template (500)');
        }
    } catch(err) {
        console.error('Test case failed.');
        console.error(err);
    }
}
testListTrainingModulesSadCase();


function testTrainingModuleHappyCase() {
    var goodThingHappened = false;
    
    var trainingModulesDataAccessor = {
        getTrainingModule: function(moduleId, callback) {
            callback(null, []);
        }
    };
    var trainingModulesController = new TrainingModulesController(trainingModulesDataAccessor);
    var res = {
        render: function(templateName, context) {
            if (templateName === 'training-module') {
                goodThingHappened = true;
            } else {
                throw new Error(`Training modules controller rendered ${templateName} instead of training-module in happy case.`);
            }
        }
    };
    try {
        trainingModulesController.index(null, res);
        if (!goodThingHappened) {
            throw new Error('Response was not rendered with the correct template (training-module)');
        }
    } catch(err) {
        console.error('Test case failed.');
        console.error(err);
    }
}
testTrainingModuleHappyCase();


function testTrainingModuleNotFound() {
    var goodThingHappened = false;
    
    var trainingModulesDataAccessor = {
        getTrainingModule: function(moduleId, callback) {
            callback({ name: 'NotFoundError', message: `Module ${moduleId} not found.` }, null);
        }
    };
    var trainingModulesController = new TrainingModulesController(trainingModulesDataAccessor);
    var res = {
        render: function(templateName, context) {
            if (templateName === '404') {
                goodThingHappened = true;
            } else {
                throw new Error(`Training modules controller rendered ${templateName} instead of 404 in not found case.`);
            }
        }
    };
    
    try {
        trainingModulesController.index(null, res);
        if (!goodThingHappened) {
            throw new Error('Response was not rendered with correct template (404)');
        }
    } catch(err) {
        console.error('Test case failed.');
        console.error(err);
    }
}
testTrainingModuleNotFound();


function testTrainingModuleSadCase() {
    var goodThingHappened = false;
    
    var trainingModulesDataAccessor = {
        getTrainingModule: function(moduleId, callback) {
            callback(new Error("Couldn't connect to DB ??? !!! :("), null);
        }
    };
    var trainingModulesController = new TrainingModulesController(trainingModulesDataAccessor);
    var res = {
        render: function(templateName, context) {
            if (templateName === '500') {
                goodThingHappened = true;
            } else {
                throw new Error(`Training modules controller rendered ${templateName} instead of 500 in sad case.`);
            }
        }
    };
    
    try {
        trainingModulesController.index(null, res);
        if (!goodThingHappened) {
            throw new Error('Response was not rendered with correct template (500)');
        }
    } catch(err) {
        console.error('Test case failed.');
        console.error(err);
    }
}
testTrainingModuleSadCase();
