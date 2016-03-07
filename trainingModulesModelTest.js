var trainingModule = require('./models/trainingModule.js');


//testing getTrainingModule function (the one that returns values for individual training modules)
//testing w/ each known module cor correct values, testing w/ a bad module to ensure no values returned from DB
//manually tested a bad quiry from DB

var goodResult = 1;
var moduleID = 1;
//trainingModule.getTrainingModule(moduleID,function(err,res){console.log(JSON.stringify(res))});

trainingModule.getTrainingModule(moduleID,function(err,res){
    var result = {"videoName":"Guide to Defining Your Unique Selling Points by CareerOne","videoPath":"https://www.youtube.com/watch?v=FhfqOwq0Q34&feature=youtu.be","readingName":"10 Actionable Steps to Discover Your Unique Skills by Unsettle","readingPath":"http://unsettle.org/skills/","quizName":"Define Your Skills Quiz","quizID":1,"moduleName":"Module 1","moduleDescription":"Learn how to discover your unique skills."};
    

    for(var prop in res)
    {
        if (res[prop] != result[prop])
            {
                goodResult = 0;
                console.log("module 1: error: " + prop);
				console.log("Res: " + res[prop]);
				console.log("Harcoded: " + result[prop] + "\n");
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
    var result = {"videoName":"Answering the Job Ad by CareerOne","videoPath":"https://www.youtube.com/watch?v=HHr67OD9zD8","readingName":null,"readingPath":null,"quizName":null,"quizID":null,"moduleName":"Module 2","moduleDescription":"Learn how to read a job ad and create a resume."};
    
    var goodResult = 1;
    for(var prop in res)
    {
        if (res[prop] != result[prop])
            {
                goodResult = 0;
                console.log("module 1: error: " + prop);
				console.log("Res: " + res[prop]);
				console.log("Harcoded: " + result[prop] + "\n");
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
    var result = {"videoName":"Preparing for Your Interview by CareerOne","videoPath":"https://www.youtube.com/watch?v=je_XMHCnyUc","readingName":null,"readingPath":null,"quizName":null,"quizID":null,"moduleName":"Module 3","moduleDescription":"Learn how to prepare for a job interview."};
    
    var goodResult = 1;
    for(var prop in res)
    {
        if (res[prop] != result[prop])
            {
                goodResult = 0;
				console.log("module 1: error: " + prop);
				console.log("Res: " + res[prop]);
				console.log("Harcoded: " + result[prop] + "\n");
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
    var result = {"videoName":"How to Present Yourself by CareerOne","videoPath":"https://www.youtube.com/watch?v=vLZ-737hGYk&feature=youtu.be","readingName":null,"readingPath":null,"quizName":null,"quizID":null,"moduleName":"Module 4","moduleDescription":"Learn how to present yourself in a job interview."};
    
    var goodResult = 1;
    for(var prop in res)
    {
        if (res[prop] != result[prop])
            {
                goodResult = 0;
				console.log("module 1: error: " + prop);
				console.log("Res: " + res[prop]);
				console.log("Harcoded: " + result[prop] + "\n");
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
    var result = {"videoName":"Practice Interview Questions by CareerOne","videoPath":"https://www.youtube.com/watch?v=jNSMPrvEWxo&feature=youtu.be","readingName":null,"readingPath":null,"quizName":null,"quizID":null,"moduleName":"Module 5","moduleDescription":"Practice interview questions."};
    
    var goodResult = 1;
    for(var prop in res)
    {
        if (res[prop] != result[prop])
            {
                goodResult = 0;
                console.log("module 1: error: " + prop);
				console.log("Res: " + res[prop]);
				console.log("Harcoded: " + result[prop] + "\n");
            }
    }
    if (goodResult === 1)
        {
            console.log("module 5: good job!")
        }
})

goodResult = 1;
moduleID = 6;
trainingModule.getTrainingModule(moduleID,function(err,res){
        if (err)
            {
                console.log("module 6: good job!");
            }
        else
            {
                goodResult = 0;
                console.log("module 6: object not broken")
            }
})

//testing getTrainingModulesListing to ensure returning proper values from module table
//test w/ values in table
//manual test w/ bad query
goodResult = 1;
trainingModule.getTrainingModulesListing(function(err,res){
    result = [{"id":1,"name":"Module 1","description":"Learn how to discover your unique skills."},{"id":2,"name":"Module 2","description":"Learn how to read a job ad and create a resume."},{"id":3,"name":"Module 3","description":"Learn how to prepare for a job interview."},{"id":4,"name":"Module 4","description":"Learn how to present yourself in a job interview."},{"id":5,"name":"Module 5","description":"Practice interview questions."}]//correct/expected result without date
for (var index = 0; index < result.length; index++)
    {
        for (var prop in result[index])
            {
                if(res[index][prop] != result[index][prop])
                    {
                        console.log(res[index][prop]);
                        console.log(result[index][prop]);
                        goodResult = 0;
                        console.log("error in getListing at: " + prop);
                    }
            }
        if(goodResult === 1)
            {
                console.log("getTrainingModulesListing produced good result");
            }
    }
})