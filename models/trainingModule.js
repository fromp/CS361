var mysql = require('mysql');
var pool = mysql.createPool({
	host 	:	'localhost',
	user 	:	'student',
	password:	'default',
	database:	'student'
});


function GetModuleController() { }

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
//	console.log(moduleID);
	//pool.query('SELECT module.name, video.name, reading.name, quiz.name FROM moduleContent LEFT JOIN module ON moduleContent.idModule = module.id LEFT JOIN video ON moduleContent.idVideo = video.id LEFT JOIN reading ON moduleContent.idReading = reading.id LEFT JOIN quiz ON moduleContent.idQuiz = quiz.id where moduleContent.idModule = ?',
	pool.query('SELECT * FROM Content WHERE moduleContent.idModule = ?', [moduleID], function(err, rows, fields){
        if (err) {
			console.log("moduleContent is broken");
            callback(err,null);
        } else if (rows.length === 0) {
			console.log("moduleContent is broken -- rows length 0");
            callback({ name: 'NotFoundError', message: 'Module not found' }, null);   
        } else {
            //console.log(JSON.stringify(rows));//fetch module content
			var video = [];
            pool.query('SELECT * FROM video WHERE id = ?', [rows[0].idVideo], function(err,rowsVideo, fields)
            {
                if (err) {
					console.log("video is broken");
                    callback(err,null);
                /*} else if (rowsVideo.length === 0) {
					console.log("video is broken -- rows length 0");
                    callback({ name: 'NotFoundError', message: 'Module not found' }, null);   */
                } else {
                //    console.log("Video: "+ JSON.stringify(rowsVideo));//fetch video content    
					if(rowsVideo.length === 0){
						rowsVideo[0] = {name : "NULL", filePath : "NULL"};
					}
					pool.query('SELECT * FROM module WHERE id = ?',[rows[0].idModule],function(err,rowsModule,fields){
                    if (err) {
						console.log("module is broken");
                        callback(err,null);
                    } else if (rowsModule.length === 0) {
                        console.log("module is broken -- rows length 0");
						callback({ name: 'NotFoundError', message: 'Module not found' }, null);   
                    } else {
                  //          console.log("Module: " + JSON.stringify(rowsModule));//fetch module content
						var rowsReading = [];
                        pool.query('SELECT * FROM reading WHERE id = ?',[rows[0].idReading],function(err,rowsReading,fields){
                        if (err) {
							console.log("reading is broken");
                            callback(err,null);
                        /*} else if (rowsReading.length === 0) {
							console.log("reading is broken -- rows length 0");
                            callback({ name: 'NotFoundError', message: 'Module not found' }, null);   */
							
                        } else {
							if(rowsReading.length === 0){
								rowsReading[0] = {name : "NULL", contentPath : "NULL"};
							}
                    //                console.log("Reading: " + JSON.stringify(rowsReading));//fetch reading content
                                    var quiz = [];
									pool.query('SELECT * FROM quiz WHERE id = ?',[rows[0].idQuiz],function(err,rowsQuiz,fields){
                                        //console.log("Quiz: " + JSON.stringify(rowsQuiz));//fetch quiz content
                                        if (err) {
											console.log("quiz is broken");
                                            callback(err,null);
                                        /*} else if (rowsQuiz.length === 0) {
											console.log("quiz is broken -- rows length 0");
                                            callback({name: 'NotFoundError',message: 'Module not found'},null);*/
                                        } else {
											if(rowsQuiz.length === 0){
												rowsQuiz[0] = {name : "NULL", id : "NULL"};
											}
                                            var outgoingData = {};//outgoingData is an object containing data from the various databases
                                            outgoingData.videoName = rowsVideo[0].name;
                                            outgoingData.videoPath = rowsVideo[0].filePath;
                                            outgoingData.readingName = rowsReading[0].name;
                                            outgoingData.readingPath = rowsReading[0].contentPath;
                                            outgoingData.quizName = rowsQuiz[0].name;
                                            outgoingData.quizID = rowsQuiz[0].id;
                                            outgoingData.moduleName = rowsModule[0].name;
                                            outgoingData.moduleDescription = rowsModule[0].description;
//                                            console.log("Outgoing Data: " + JSON.stringify(outgoingData));
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

GetModuleController.prototype.getTrainingModulesListing = getTrainingModulesListing;
GetModuleController.prototype.getTrainingModule = getTrainingModule;

//module.exports = GetModuleController;
module.exports = {
	getTrainingModulesListing,
	getTrainingModule
};