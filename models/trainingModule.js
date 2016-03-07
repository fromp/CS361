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
	pool.query('SELECT module.name as ModName, module.description as ModDesc, video.name as VideoName, video.filePath as VideoPath, reading.name as ReadingName, reading.contentPath as ReadingPath, quiz.id as QuizId, quiz.name as QuizName FROM moduleContent ' +
	'LEFT JOIN module ON moduleContent.idModule = module.id '+
	'LEFT JOIN video ON moduleContent.idVideo = video.id '+
	'LEFT JOIN reading ON moduleContent.idReading = reading.id '+ 
	'LEFT JOIN quiz ON moduleContent.idQuiz = quiz.id where moduleContent.idModule = ?',
	[moduleID], function(err, rows, fields){
		if(err){
			callback(err, null);
		}
		else if (rows.length === 0) {
			callback({ name: 'NotFoundError', message: 'Module not found' }, null);   
		} else {
			//outgoingData is an object containing data from the various databases
			var outgoingData = {};
			outgoingData.videoName = rows[0].VideoName;
			outgoingData.videoPath = rows[0].VideoPath;
			outgoingData.readingName = rows[0].ReadingName;
			outgoingData.readingPath = rows[0].ReadingPath;
			outgoingData.quizName = rows[0].QuizName;
			outgoingData.quizID = rows[0].QuizId;
			outgoingData.moduleName = rows[0].ModName;
			outgoingData.moduleDescription = rows[0].ModDesc;
			callback(null,outgoingData);
		}
	});
}
	
module.exports = {
	getTrainingModulesListing,
	getTrainingModule
};