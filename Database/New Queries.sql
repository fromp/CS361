--Query to search through modules: Shows everything including NULL
--there are 5 modules 
--there are 5 videos; 1 for each module
--there is only 1 reading created for module 1
--there is only 1 quiz created for module 1

SELECT module.name, video.name, reading.name, quiz.name FROM moduleContent 
LEFT JOIN module ON moduleContent.idModule = module.id  
LEFT JOIN video ON moduleContent.idVideo = video.id
LEFT JOIN reading ON moduleContent.idReading = reading.id
LEFT JOIN quiz ON moduleContent.idQuiz = quiz.id;

--Shows only the modules with video, reading and quiz
SELECT module.name, video.name, reading.name, quiz.name FROM moduleContent 
INNER JOIN module ON moduleContent.idModule = module.id  
INNER JOIN video ON moduleContent.idVideo = video.id
INNER JOIN reading ON moduleContent.idReading = reading.id
INNER JOIN quiz ON moduleContent.idQuiz = quiz.id;

--Query example to add a reading to a module:
UPDATE moduleContent SET idReading=? WHERE idModule=?;


--to view the name of a video 
--view all videos 
--add the where and only see videos within a specific module be sure to remove ; before where
SELECT video.name FROM video 
INNER JOIN moduleContent ON video.id = moduleContent.idVideo 
INNER JOIN module ON module.id = idModule;

WHERE module.id = 2;	

--to view the name of a reading
--since we only have a reading for module 1
SELECT reading.name FROM reading
INNER JOIN moduleContent ON reading.id = moduleContent.idReading
INNER JOIN module ON module.id = moduleContent.idModule;


--to view the link of a video in a particular module
--you can change this number to 1-5
SELECT video.filePath FROM video
INNER JOIN moduleContent ON video.id = moduleContent.idVideo
INNER JOIN module ON module.id = moduleContent.idModule
WHERE module.id = ?;	

--to view the contentPath of a reading in a particular module
--since we only have a reading for module 1
SELECT reading.contentPath FROM reading
INNER JOIN moduleContent ON reading.id = moduleContent.idReading
INNER JOIN module ON module.id = moduleContent.idModule
WHERE module.id = 1;	



--view question 1 for quiz 1
--we only have 1 quiz with 3 questions
SELECT quizMultipleChoice.question FROM quizMultipleChoice
INNER JOIN quizQuestion ON quizQuestion.idMC = quizMultipleChoice.id
INNER JOIN quiz ON quiz.id = quizQuestion.idQuiz
WHERE quiz.id = 1 AND quizQuestion.id = 1; 

--view multiple choices in quiz 1; quiz question 1
--change to choice2, choice3, choice4 
SELECT quizMultipleChoice.choice1 FROM quizMultipleChoice    
INNER JOIN quizQuestion ON quizQuestion.idMC = quizMultipleChoice.id
INNER JOIN quiz ON quiz.id = quizQuestion.idQuiz
WHERE quiz.id = 1 AND quizQuestion.id = 1;

--view the answer for quiz 1; quiz question 1
SELECT quizAnswer.answer FROM quizAnswer
INNER JOIN quizQuestion ON quizQuestion.idAnswer = quizAnswer.id
INNER JOIN quiz ON quiz.id = quizQuestion.idQuiz
WHERE quiz.id = 1 AND quizQuestion.id = 1;


--view multiple choices in quiz 1; quiz question 2
--change to choice2 ONLY 2 CHOICES
SELECT quizMultipleChoice.choice1 FROM quizMultipleChoice   
INNER JOIN quizQuestion ON quizQuestion.idMC = quizMultipleChoice.id
INNER JOIN quiz ON quiz.id = quizQuestion.idQuiz
WHERE quiz.id = 1 AND quizQuestion.id = 2;

--view the answer for quiz 1; quiz question 2
SELECT quizAnswer.answer FROM quizAnswer
INNER JOIN quizQuestion ON quizQuestion.idAnswer = quizAnswer.id
INNER JOIN quiz ON quiz.id = quizQuestion.idQuiz
WHERE quiz.id = 1 AND quizQuestion.id = 2;


--view multiple choices in quiz1; quiz question 3
 --change to choice2, choice3, choice4 
SELECT quizMultipleChoice.choice1 FROM quizMultipleChoice   
INNER JOIN quizQuestion ON quizQuestion.idMC = quizMultipleChoice.id
INNER JOIN quiz ON quiz.id = quizQuestion.idQuiz
WHERE quiz.id = 1 AND quizQuestion.id = 3;

--view the answer for quiz 1 and quiz question 3
SELECT quizAnswer.answer FROM quizAnswer
INNER JOIN quizQuestion ON quizQuestion.idAnswer = quizAnswer.id
INNER JOIN quiz ON quiz.id = quizQuestion.idQuiz
WHERE quiz.id = 1 AND quizQuestion.id = 3;

--find if a user completed a module
SELECT user.firstName, user.lastName, enrollment.completed, enrollment.grade FROM enrollment
INNER JOIN user ON user.id = enrollment.idUser
WHERE user.id = 1 AND module.id = 1;

--a user enrolls in a module
INSERT INTO enrollment( idUser, idModule) VALUES (
( SELECT user.id FROM user
  WHERE user.lastName = ? AND user.firstName = ? ),
( SELECT module.id FROM module WHERE module.id = ? );


--change whether a user completed a particular module
UPDATE enrollment SET completed = 1 WHERE moduleId = ? AND userID = ?;

--change grade for a particular user and module
--can change to any number
UPDATE enrollment SET grade = 0.75 WHERE moduleID = ? AND userID = ?;

--I didn't test the following queries:  Not sure if they were needed


--update that a user completed a particular module when they completed a quiz, honor system that they do not skip ahead when only 1 question right?
UPDATE enrollment SET completed = 1 WHERE moduleID = ? AND userID = ? AND grade <> 0;

--shows grade, can use for enforcing minimum grade for enrollment in a later module, not necessarily the next
INSERT INTO enrollment(idUser, idModule, completed, grade, compDate) VALUES (
SELECT user.id FROM user WHERE user.id = ?,
SELECT module.id FROM module WHERE module.id NOT IN 
( SELECT enrollment.idModule from enrollment
	WHERE enrollment.idUser = ?
)
0, NULL, NULL);


--draft
SELECT grade FROM enrollment
WHERE WHERE moduleID < {
	SELECT id FROM module
	WHERE _______________;
} AND idUser = ? AND grade > 0.50;




















