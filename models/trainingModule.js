var mysql = require('mysql');//grab required package for mysql interaction
var pool = mysql.createPool({//create pool to interact with mysql
	host 	:	'localhost',
	user 	:	'student',
	password:	'default',
	database:	'student'
});

//this function retrieves the list of training modules from module DB, and returns the name, description, added date, and id of that module to put on list page
function getTrainingModulesListing(callback) {
    pool.query('SELECT id, name, description, addedDate FROM module', function (err, rows, fields) {
        if (err) {//if no results produced, throw an error
            callback(err, null);
            return;
        }
        callback(null, rows);
    });
}
//this function retrieves info about desired training module from the various tables, compiles them into an object and returns object
//accepts a module ID as input
function getTrainingModule(moduleID, callback) {
	pool.query('SELECT module.name as ModName, module.description as ModDesc, video.name as VideoName, video.filePath as VideoPath, reading.name as ReadingName, reading.contentPath as ReadingPath, quiz.id as QuizId, quiz.name as QuizName FROM moduleContent ' +
	'LEFT JOIN module ON moduleContent.idModule = module.id '+
	'LEFT JOIN video ON moduleContent.idVideo = video.id '+
	'LEFT JOIN reading ON moduleContent.idReading = reading.id '+ 
	'LEFT JOIN quiz ON moduleContent.idQuiz = quiz.id where moduleContent.idModule = ?',
	[moduleID], function(err, rows, fields){//query that pulls from various tables to return info for each individual module. Renames values in query due to node.js overwriting table values with same name
		if(err){//if failure return err
			callback(err, null);
		}
		else if (rows.length === 0) {//if nothing returned send message
			callback({ name: 'NotFoundError', message: 'Module not found' }, null);   
		} else {//fill outgoing object with desired values from table query
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