var trainingModule = require('./models/trainingModule.js');

var goodResult = 1;
var moduleID = 1;
//trainingModule.getTrainingModule(moduleID,function(err,res){console.log(JSON.stringify(res))});

trainingModule.getTrainingModule(moduleID,function(err,res){
    var result = {"videoName":"Guide to Defining Your Unique Selling Points by CareerOne","videoPath":"https://www.youtube.com/watch?v=FhfqOwq0Q34&feature=youtu.be","readingName":"10 Actionable Steps to Discover Your Unique Skills by Unsettle","readingPath":"http://unsettle.org/skills/","quizName":"Define Your Skills Quiz","quizID":1,"moduleName":"Module 1","moduleDescription":"Learn how to discover your unique skills.","addedDate":"2016-02-28T00:00:00.000Z"}
    

    for(var prop in res)
    {
        if (res[prop] != result[prop])
            {
                goodResult = 0;
                console.log("module 1: error: " + prop);
            }
    }
    if (goodResult === 1)
        {
            console.log("module 1: good job!")
        }
})

goodResult = 1;
moduleID = 2;
trainingModule.getTrainingModule(moduleID,function(err,res){
    var result = {"videoName":"Answering the Job Ad by CareerOne","videoPath":"https://www.youtube.com/watch?v=HHr67OD9zD8","readingName":"NULL","readingPath":"NULL","quizName":"NULL","quizID":"NULL","moduleName":"Module 2","moduleDescription":"Learn how to read a job ad and create a resume.","addedDate":"2016-02-28T00:00:00.000Z"}
    
    var goodResult = 1;
    for(var prop in res)
    {
        if (res[prop] != result[prop])
            {
                goodResult = 0;
                console.log("module 2: error: " + prop);
            }
    }
    if (goodResult === 1)
        {
            console.log("module 2: good job!")
        }
})

goodResult = 1;
moduleID = 3;
trainingModule.getTrainingModule(moduleID,function(err,res){
    var result = {"videoName":"Preparing for Your Interview by CareerOne","videoPath":"https://www.youtube.com/watch?v=je_XMHCnyUc","readingName":"NULL","readingPath":"NULL","quizName":"NULL","quizID":"NULL","moduleName":"Module 3","moduleDescription":"Learn how to prepare for a job interview.","addedDate":"2016-02-28T00:00:00.000Z"}
    
    var goodResult = 1;
    for(var prop in res)
    {
        if (res[prop] != result[prop])
            {
                goodResult = 0;
                console.log("module 3: error: " + prop);
            }
    }
    if (goodResult === 1)
        {
            console.log("module 3: good job!")
        }
})

goodResult = 1;
moduleID = 4;
trainingModule.getTrainingModule(moduleID,function(err,res){
    var result = {"videoName":"How to Present Yourself by CareerOne","videoPath":"https://www.youtube.com/watch?v=vLZ-737hGYk&feature=youtu.be","readingName":"NULL","readingPath":"NULL","quizName":"NULL","quizID":"NULL","moduleName":"Module 4","moduleDescription":"Learn how to present yourself in a job interview.","addedDate":"2016-02-28T00:00:00.000Z"}
    
    var goodResult = 1;
    for(var prop in res)
    {
        if (res[prop] != result[prop])
            {
                goodResult = 0;
                console.log("module 4: error: " + prop);
            }
    }
    if (goodResult === 1)
        {
            console.log("module 4: good job!")
        }
})

goodResult = 1;
moduleID = 5;
trainingModule.getTrainingModule(moduleID,function(err,res){
    var result = {"videoName":"Practice Interview Questions by CareerOne","videoPath":"https://www.youtube.com/watch?v=jNSMPrvEWxo&feature=youtu.be","readingName":"NULL","readingPath":"NULL","quizName":"NULL","quizID":"NULL","moduleName":"Module 5","moduleDescription":"Practice interview questions.","addedDate":"2016-02-28T00:00:00.000Z"}
    
    var goodResult = 1;
    for(var prop in res)
    {
        if (res[prop] != result[prop])
            {
                goodResult = 0;
                console.log("module 5: error: " + prop);
            }
    }
    if (goodResult === 1)
        {
            console.log("module 5: good job!")
        }
})

goodResult = 1;
moduleID = 6;
trainingModule.getTrainingModule(moduleID,function(err,res,1){
        if (Object.keys(res).length !== NULL)
            {
                console.log("module 6: good job!");
            }
        else
            {
                goodResult = 0;
                console.log("module 6: object not broken")
            }
})