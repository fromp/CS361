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
	//pool.query('SELECT module.name, video.name, reading.name, quiz.name FROM moduleContent LEFT JOIN module ON moduleContent.idModule = module.id LEFT JOIN video ON moduleContent.idVideo = video.id LEFT JOIN reading ON moduleContent.idReading = reading.id LEFT JOIN quiz ON moduleContent.idQuiz = quiz.id where moduleContent.idModule = ?',
	pool.query('SELECT * FROM moduleContent WHERE moduleContent.idModule = ?', [moduleID], function(err, rows, fields){
	    console.log(JSON.stringify(rows));//fetch module content
        pool.query('SELECT * FROM video WHERE id = ?', [rows[0].idVideo], function(err,rowsVideo, fields)
        {
            console.log("Video: "+ JSON.stringify(rowsVideo));//fetch video content
            pool.query('SELECT * FROM module WHERE id = ?',[rows[0].idModule],function(err,rowsModule,fields){
                console.log("Module: " + JSON.stringify(rowsModule));//fetch module content
                pool.query('SELECT * FROM reading WHERE id = ?',[rows[0].idReading],function(err,rowsReading,fields){
                    console.log("Reading: " + JSON.stringify(rowsReading));//fetch reading content
                    pool.query('SELECT * FROM quiz WHERE id = ?',[rows[0].idQuiz],function(err,rowsQuiz,fields){
                        console.log("Quiz: " + JSON.stringify(rowsQuiz));//fetch quiz content
                        if (err) {
                            callback(err,null);
                        } else if (rowsQuiz.length === 0) {
                            callback({name: 'NotFoundError',message: 'Module not found'},null);
                        } else {
                            var outgoingData = {videoName : rowsVideo.name};
                            //outgoingData.videoName = rowsVideo.name;
                            //outgoingData.videoPath = rowsVideo.filePath;
                            //outgoingData.readingName = rowsReading.name;
                            console.log(JSON.stringify(outgoingData));
                        }
                    })
                    
                })
            })
        })

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
