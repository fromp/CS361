var trainingModule = require('./models/trainingModule.js');

//var TrainingModuleModel = new GetModuleController();

//getTrainingModule

var moduleID = 1;
var res = {};
//trainingModule.getTrainingModule(moduleID,function(err,res){console.log(JSON.stringify(res))});
trainingModule.getTrainingModule(moduleID,function(err,res){
    var result = {"videoName":"Guide to Defining Your Unique Selling Points by CareerOne","videoPath":"https://www.youtube.com/watch?v=FhfqOwq0Q34&feature=youtu.be","readingName":"10 Actionable Steps to Discover Your Unique Skills by Unsettle","readingPath":"http://unsettle.org/skills/","quizName":"Define Your Skills Quiz","quizID":1,"moduleName":"Module 1","moduleDescription":"Learn how to discover your unique skills.","addedDate":"2016-02-28T00:00:00.000Z"}
    
    var goodResult = 1;
    for(var prop in res)
    {
        if (res[prop] != result[prop])
            {
                goodResult = 0;
                console.log("error: " + prop);
            }
    }
    if (goodResult === 1)
        {
            console.log("good job!")
        }
    
    
/*    if (res === {"videoName":"Guide to Defining Your Unique Selling Points by CareerOne","videoPath":"https://www.youtube.com/watch?v=FhfqOwq0Q34&feature=youtu.be","readingName":"10 Actionable Steps to Discover Your Unique Skills by Unsettle","readingPath":"http://unsettle.org/skills/","quizName":"Define Your Skills Quiz","quizID":1,"moduleName":"Module 1","moduleDescription":"Learn how to discover your unique skills.","addedDate":"2016-02-28T00:00:00.000Z"})*/
        //{console.log("Correct answer: Module 1")}
})

moduleID = 2;

moduleID = 3;