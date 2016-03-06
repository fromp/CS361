var mysql = require('mysql');
var pool = mysql.createPool({
	host 	:	'localhost',
	user 	:	'student',
	password:	'default',
	database:	'student'
});


function GetModuleController(dataAccessor) {
    this.dataAccessor = dataAccessor;
}

GetModuleController.prototype.getTrainingModulesListing(callback) {
    pool.query('SELECT id, name, description, addedDate FROM module', function (err, rows, fields) {
        if (err) {
            callback(err, null);
            return;
        }
        
        callback(null, rows);
    });
}

GetModuleController.prototype.getTrainingModule(moduleID, callback) {
	//pool.query('SELECT module.name, video.name, reading.name, quiz.name FROM moduleContent LEFT JOIN module ON moduleContent.idModule = module.id LEFT JOIN video ON moduleContent.idVideo = video.id LEFT JOIN reading ON moduleContent.idReading = reading.id LEFT JOIN quiz ON moduleContent.idQuiz = quiz.id where moduleContent.idModule = ?',
	pool.query('SELECT * FROM moduleContent WHERE moduleContent.idModule = ?', [moduleID], function(err, rows, fields){
        if (err) {
            callback(err,null);
        } else if (rows.length === 0) {
            callback({ name: 'NotFoundError', message: 'Module not found' }, null);   
        } else {
            //console.log(JSON.stringify(rows));//fetch module content
            pool.query('SELECT * FROM video WHERE id = ?', [rows[0].idVideo], function(err,rowsVideo, fields)
            {
                if (err) {
                    callback(err,null);
                } else if (rowsVideo.length === 0) {
                    callback({ name: 'NotFoundError', message: 'Module not found' }, null);   
                } else {
                //    console.log("Video: "+ JSON.stringify(rowsVideo));//fetch video content    
                    pool.query('SELECT * FROM module WHERE id = ?',[rows[0].idModule],function(err,rowsModule,fields){
                    if (err) {
                        callback(err,null);
                    } else if (rowsModule.length === 0) {
                        callback({ name: 'NotFoundError', message: 'Module not found' }, null);   
                    } else {
                  //          console.log("Module: " + JSON.stringify(rowsModule));//fetch module content
                            pool.query('SELECT * FROM reading WHERE id = ?',[rows[0].idReading],function(err,rowsReading,fields){
                        if (err) {
                            callback(err,null);
                        } else if (rowsReading.length === 0) {
                            callback({ name: 'NotFoundError', message: 'Module not found' }, null);   
                        } else {
                    //                console.log("Reading: " + JSON.stringify(rowsReading));//fetch reading content
                                    pool.query('SELECT * FROM quiz WHERE id = ?',[rows[0].idQuiz],function(err,rowsQuiz,fields){
                                        //console.log("Quiz: " + JSON.stringify(rowsQuiz));//fetch quiz content
                                        if (err) {
                                            callback(err,null);
                                        } else if (rowsQuiz.length === 0) {
                                            callback({name: 'NotFoundError',message: 'Module not found'},null);
                                        } else {
                                            var outgoingData = {};//outgoingData is an object containing data from the various databases
                                            outgoingData.videoName = rowsVideo[0].name;
                                            outgoingData.videoPath = rowsVideo[0].filePath;
                                            outgoingData.readingName = rowsReading[0].name;
                                            outgoingData.readingPath = rowsReading[0].contentPath;
                                            outgoingData.quizName = rowsQuiz[0].name;
                                            outgoingData.quizID = rowsQuiz[0].id;
                                            outgoingData.moduleName = rowsModule[0].name;
                                            outgoingData.moduleDescription = rowsModule[0].description;
                                            outgoingData.addedDate = rowsModule[0].addedDate;
                                            console.log("Outgoing Data: " + JSON.stringify(outgoingData));
                                            callback(null,outgoingData);
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })

/*		if (err) {
            callback(err, null);
        } else if (rows.length === 0) {
            callback({ name: 'NotFoundError', message: 'Module not found' }, null);
        } else {
			callback(null, rows[0]);*/
        }
    });
}

module.exports = GetModuleController;