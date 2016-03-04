var mysql = require('mysql');
var pool = mysql.createPool({
	host 	:	'localhost',
	user 	:	'student',
	password:	'default',
	database:	'student'
});

function getTrainingModulesListing(callback) {
    pool.query('SELECT name, addedDate FROM module', function (err, rows, fields) {
        if (err) {
            console.error(err);
            return;
        }

        var result = [];
        for (var i = 0; i < rows.length; i++) {
            result.push({ name: rows[i].name, addedDate: rows[i].addedDate });
        }

        console.log(rows);

//      getTrainingModule(function(){},1); used for testing
            
        callback(result);    
    
//      context.results = JSON.stringify(rows);
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
        
/*      result.idModule = rows.idModule;
        result.name = rows.moduleName;
        result.ModuleDescription = rows.ModuleDescription;
        result.ModuleVideo = rows.ModuleVideo;
        result.AddedDate = rows.AddedDate;
*/
        console.log(result);//used to ensure results are correctly output
        
        callback_individual(result);
    });
}

module.exports = {
    getTrainingModulesListing: getTrainingModulesListing
};
