
/**
 * Constructor for an object containing request handler methods for the training module endpoints.
 * @param dataAccessor: An object containing methods for accessing the database. See models/trainingModule.js.
 */
function TrainingModuleController(dataAccessor) {
    this.dataAccessor = dataAccessor;
}

/**
 * Request handler function for the main training modules page.
 */
TrainingModuleController.prototype.index = function (req, res) {
    this.dataAccessor.getTrainingModulesListing(function(err, modules) {
        var context = {
            modules: modules,
            trainingActive: true
        };
        
        if (err) {
            res.render('500', context);
        } else {
            res.render('training-modules', context);
        }
    });
};

/**
 * Request handler function for the training module details page.
 */
TrainingModuleController.prototype.trainingModule = function(req, res) {
    this.dataAccessor.getTrainingModule(req.params.moduleID, function(err, module) {
        var context = {
            module: module,
            trainingActive: true
        };
        
        if (err && err.name === 'NotFoundError') {
            res.render('404', context);
        } else if (err) {
            res.render('500', context);
        } else {
            res.render('training-module', context);
        }
    });
}

module.exports = TrainingModuleController;
