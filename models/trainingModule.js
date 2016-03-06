var mysql = require('mysql');
var pool = mysql.createPool({
	host 	:	'localhost',
	user 	:	'student',
	password:	'default',
	database:	'student'
});

function getTrainingModulesListing(callback) {
    pool.query('SELECT id, name, description, addedDate FROM module', function (err, rows, fields) {
        if (err) {
            callback(err, null);
            return;
        }
        
        callback(null, rows);
    });
}

function getTrainingModule(moduleID, callback) {
	pool.query('SELECT module.id, module.name, module.description, module.addedDate, video.id, video.name, video.filePath, reading.id, reading.name, reading.contentPath, quiz.id, quiz.name FROM moduleContent' +
	'LEFT JOIN module ON moduleContent.idModule = module.id' +   
	'LEFT JOIN video ON moduleContent.idVideo = video.id' +
	'LEFT JOIN reading ON moduleContent.idReading = reading.id' +
	'LEFT JOIN quiz ON moduleContent.idQuiz = quiz.id' + 
	'where moduleContent.idModule = 1', [moduleID], function (err, rows, fields) {
        console.log([moduleID]);
		console.log(rows);
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
