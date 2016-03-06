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
	pool.query('SELECT * FROM moduleContent LEFT JOIN module ON moduleContent.idModule = module.id LEFT JOIN video ON moduleContent.idVideo = video.id LEFT JOIN reading ON moduleContent.idReading = reading.id',
	//pool.query('SELECT module.name, video.name, reading.name, quiz.name FROM moduleContent LEFT JOIN module ON moduleContent.idModule = module.id LEFT JOIN video ON moduleContent.idVideo = video.id LEFT JOIN reading ON moduleContent.idReading = reading.id LEFT JOIN quiz ON moduleContent.idQuiz = quiz.id where moduleContent.idModule = ?',
	//[moduleID], function(err, rows, fields){
	function(err, rows, fields){
	//pool.query('SELECT * FROM module WHERE id = ?', [moduleID], function (err, rows, fields) {
        console.log(JSON.stringify(rows));
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
