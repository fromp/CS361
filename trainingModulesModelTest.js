var trainingModule = require('./models/trainingModule.js');


//testing getTrainingModule function (the one that returns values for individual training modules)
//testing w/ each known module cor correct values, testing w/ a bad module to ensure no values returned from DB
//manually tested a bad quiry from DB

var goodResult = 1;//bool value used as a flag to determine if a test passed or not, needs to be reset after each test
var moduleID = 1;//value passed to getTrainingModule function--determines which module is retrieved, starting with module 1
//trainingModule.getTrainingModule(moduleID,function(err,res){console.log(JSON.stringify(res))});

trainingModule.getTrainingModule(moduleID,function(err,res){//retrieve module 1
    var result = {"videoName":"Guide to Defining Your Unique Selling Points by CareerOne","videoPath":"https://www.youtube.com/watch?v=FhfqOwq0Q34&feature=youtu.be","readingName":"10 Actionable Steps to Discover Your Unique Skills by Unsettle","readingPath":"http://unsettle.org/skills/","quizName":"Define Your Skills Quiz","quizID":1,"moduleName":"Module 1","moduleDescription":"Learn how to discover your unique skills."};//var result = an object that contains correct output from function--exclueds date due to formatting of date and lack of need for date value
    

    for(var prop in res)
    {
        if (res[prop] != result[prop])
            {
                goodResult = 0;//if res != result, change flag to indicate tests did not pass
                console.log("module 1: error: " + prop);//log where the error is
				console.log("Res: " + res[prop]);//log what the output is
				console.log("Harcoded: " + result[prop] + "\n");//log what the expected output is
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
    var result = {"videoName":"Answering the Job Ad by CareerOne","videoPath":"https://www.youtube.com/watch?v=HHr67OD9zD8","readingName":null,"readingPath":null,"quizName":null,"quizID":null,"moduleName":"Module 2","moduleDescription":"Learn how to read a job ad and create a resume."};//var result = an object that contains correct output from function--exclueds date due to formatting of date and lack of need for date value
    
    var goodResult = 1;
    for(var prop in res)
    {
        if (res[prop] != result[prop])
            {
                goodResult = 0;//if res != result, change flag to indicate tests did not pass
                console.log("module 1: error: " + prop);//log where the error is
				console.log("Res: " + res[prop]);//log what the output is
				console.log("Harcoded: " + result[prop] + "\n");//log what the expected output is
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
    var result = {"videoName":"Preparing for Your Interview by CareerOne","videoPath":"https://www.youtube.com/watch?v=je_XMHCnyUc","readingName":null,"readingPath":null,"quizName":null,"quizID":null,"moduleName":"Module 3","moduleDescription":"Learn how to prepare for a job interview."};//var result = an object that contains correct output from function--exclueds date due to formatting of date and lack of need for date value
    
    var goodResult = 1;
    for(var prop in res)
    {
        if (res[prop] != result[prop])
            {
                goodResult = 0;//if res != result, change flag to indicate tests did not pass
				console.log("module 1: error: " + prop);//log where the error is
				console.log("Res: " + res[prop]);//log what the output is
				console.log("Harcoded: " + result[prop] + "\n");//log what the expected output is
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
    var result = {"videoName":"How to Present Yourself by CareerOne","videoPath":"https://www.youtube.com/watch?v=vLZ-737hGYk&feature=youtu.be","readingName":null,"readingPath":null,"quizName":null,"quizID":null,"moduleName":"Module 4","moduleDescription":"Learn how to present yourself in a job interview."};//var result = an object that contains correct output from function--exclueds date due to formatting of date and lack of need for date value
    
    var goodResult = 1;
    for(var prop in res)
    {
        if (res[prop] != result[prop])
            {
                goodResult = 0;//if res != result, change flag to indicate tests did not pass
				console.log("module 1: error: " + prop);//log where the error is
				console.log("Res: " + res[prop]);//log what the output is
				console.log("Harcoded: " + result[prop] + "\n");//log what the expected output is
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
    var result = {"videoName":"Practice Interview Questions by CareerOne","videoPath":"https://www.youtube.com/watch?v=jNSMPrvEWxo&feature=youtu.be","readingName":null,"readingPath":null,"quizName":null,"quizID":null,"moduleName":"Module 5","moduleDescription":"Practice interview questions."};//var result = an object that contains correct output from function--exclueds date due to formatting of date and lack of need for date value
    
    var goodResult = 1;
    for(var prop in res)
    {
        if (res[prop] != result[prop])
            {
                goodResult = 0;//if res != result, change flag to indicate tests did not pass
                console.log("module 1: error: " + prop);//log where the error is
				console.log("Res: " + res[prop]);//log what the output is
				console.log("Harcoded: " + result[prop] + "\n");//log what the expected output is
            }
    }
    if (goodResult === 1)
        {
            console.log("module 5: good job!")
        }
})

goodResult = 1;
moduleID = 6;//test module 6: module 6 does not exist, so we expect an error
trainingModule.getTrainingModule(moduleID,function(err,res){
        if (err)
            {
                console.log("module 6: good job!");//error received, test is passed
            }
        else
            {
                goodResult = 0;//set failure flag
                console.log("module 6: object not broken")//if we don't get an error, fail the test. There should be an error due to mod 6 not existing
            }
})

//testing getTrainingModulesListing to ensure returning proper values from module table
//getTrainingModulesListing returns the list of modules along with their description and date. Date not tested here due to formatting of date and lack of need for added date
//test w/ values in table
//manual test w/ bad query
goodResult = 1;
trainingModule.getTrainingModulesListing(function(err,res){
    result = [{"id":1,"name":"Module 1","description":"Learn how to discover your unique skills."},{"id":2,"name":"Module 2","description":"Learn how to read a job ad and create a resume."},{"id":3,"name":"Module 3","description":"Learn how to prepare for a job interview."},{"id":4,"name":"Module 4","description":"Learn how to present yourself in a job interview."},{"id":5,"name":"Module 5","description":"Practice interview questions."}]//var result = an array of objects that contain correct output from function--exclueds date due to formatting of date and lack of need for date value
for (var index = 0; index < result.length; index++)//cycle through each object contained in array
    {
        for (var prop in result[index])//cycle through elements of object, testing against appropriate value
            {
                if(res[index][prop] != result[index][prop])
                    {
                        console.log(res[index][prop]);//print object element returned
                        console.log(result[index][prop]);//print object element expected value
                        goodResult = 0;//if the two objects are not equal, set failure flag
                        console.log("error in getListing at: " + prop);//print location for failure
                    }
            }
        if(goodResult === 1)
            {
                console.log("getTrainingModulesListing produced good result");//if never fail an object, log success
            }
    }
})