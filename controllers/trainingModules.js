
function TrainingModuleController(serviceClient) {
    this.serviceClient = serviceClient;
}

TrainingModuleController.prototype.index = function (req, res) {
    this.serviceClient.getTrainingModulesListing(function(err, modules) {
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

module.exports = TrainingModuleController;
