
function TrainingModuleController(dataAccessor) {
    this.dataAccessor = dataAccessor;
}

TrainingModuleController.prototype.index = function (req, res) {
    this.dataAccessor.GetModuleController.getTrainingModulesListing(function(err, modules) {
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

TrainingModuleController.prototype.trainingModule = function(req, res) {
    this.dataAccessor.GetModuleController.getTrainingModule(req.params.moduleID, function(err, module) {
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
