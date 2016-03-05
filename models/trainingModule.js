var mysql = require('mysql');
var pool = mysql.createPool({
	host 	:	'localhost',
	user 	:	'student',
	password:	'default',
	database:	'student'
});

function getTrainingModulesListing(callback) {
    pool.query('SELECT name, description, addedDate FROM module', function (err, rows, fields) {
        if (err) {
            callback(err, null);
            return;
        }
        
        callback(null, rows);
    });
}

function getTrainingModule(callback_individual, module_ID) {
    pool.query('SELECT * FROM module WHERE id = ?', [module_ID], function (err, rows, fields) {
        console.log(rows);
        var result = {
            idModule: rows[0].idModule,
            name: rows[0].moduleName,
            ModuleDescription: rows[0].ModuleDescription,
            ModuleVideo: rows[0].ModuleVideo,
            AddedDate: rows[0].AddedDate
        };
        
        callback_individual(result);
    });
}

module.exports = {
    getTrainingModulesListing
};
