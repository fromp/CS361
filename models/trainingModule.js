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

function getTrainingModule(moduleID, callback) {
    pool.query('SELECT * FROM module WHERE id = ?', [moduleID], function (err, rows, fields) {
        if (err) {
            callback(err, null);
        } else if (rows.length === 0) {
            callback({ name: 'NotFoundError', message: 'Module not found' }, null);
        } else {
            callback(null, rows[0]);
        }
    });
}

module.exports = {
    getTrainingModulesListing,
    getTrainingModule
};
