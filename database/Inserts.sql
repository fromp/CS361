USE student;

INSERT INTO shelter (name, addressLine1, addressLine2, city, state, postalCode, phone) VALUES ('Central Shelter for Women', '12 Main St.', 'Suite 2B', 'Los Angeles', 'CA', '95141', '221-221-2221');
INSERT INTO shelter (name, addressLine1, city, state, postalCode, phone) VALUES ('East Side Shelter', '564 MLK Drive', 'Los Angeles', 'CA', '95143', '221-111-4321');
INSERT INTO shelter (name, addressLine1, addressLine2, city, state, postalCode, phone) VALUES ('West Side Shelter', '2055 W. Elm Street', 'PO Box 9999', 'Los Angeles', 'CA', '95147', '221-333-1234');

INSERT INTO user (lastName, firstName, email, password, idShelter) VALUES ('Doe', 'Jane', 'doej@email.com', 'doePassword', 1);
INSERT INTO user (lastName, firstName, email, password, idShelter) VALUES ('Smith', 'Harriet', 'smithh@email.com', 'smithPassword', 2);
INSERT INTO user (lastName, firstName, email, password, idShelter) VALUES ('Person', 'Susie', 'susiep@email.com', 'susiePassword', 3);
INSERT INTO user (lastName, firstName, email, password, idShelter) VALUES ('Que', 'Sally', 'sallyq@email.com', 'sallyPassword', 1);
INSERT INTO user (lastName, firstName, email, password, idShelter) VALUES ('Davis', 'Kelly', 'kellyd@email.com', 'kellyPassword', 1);
INSERT INTO user (lastName, firstName, email, password, idShelter) VALUES ('Warrington', 'Mel', 'melw@email.com', 'melPassword', 3);


INSERT INTO module (name, description, addedDate) VALUES ('Module 1', 'Learn how to discover your unique skills.', '2016-02-28');
INSERT INTO module (name, description, addedDate) VALUES ('Module 2', 'Learn how to read a job ad and create a resume.', '2016-02-28');
INSERT INTO module (name, description, addedDate) VALUES ('Module 3', 'Learn how to prepare for a job interview.', '2016-02-28');
INSERT INTO module (name, description, addedDate) VALUES ('Module 4', 'Learn how to present yourself in a job interview.', '2016-02-28');
INSERT INTO module (name, description, addedDate) VALUES ('Module 5', 'Practice interview questions.', '2016-02-28');

INSERT INTO video (name, filePath) VALUES ('Guide to Defining Your Unique Selling Points by CareerOne', 'https://www.youtube.com/watch?v=FhfqOwq0Q34&feature=youtu.be');
INSERT INTO video (name, filePath) VALUES ('Answering the Job Ad by CareerOne', 'https://www.youtube.com/watch?v=HHr67OD9zD8');
INSERT INTO video (name, filePath) VALUES ('Preparing for Your Interview by CareerOne', 'https://www.youtube.com/watch?v=je_XMHCnyUc');
INSERT INTO video (name, filePath) VALUES ('How to Present Yourself by CareerOne', 'https://www.youtube.com/watch?v=vLZ-737hGYk&feature=youtu.be');
INSERT INTO video (name, filePath) VALUES ('Practice Interview Questions by CareerOne', 'https://www.youtube.com/watch?v=jNSMPrvEWxo&feature=youtu.be');

INSERT INTO reading (name, contentPath) VALUES ('10 Actionable Steps to Discover Your Unique Skills by Unsettle', 'http://unsettle.org/skills/');


INSERT INTO quiz (name) VALUES ('Define Your Skills Quiz');

INSERT INTO moduleContent (idModule, idVideo, idReading, idQuiz) VALUES (1, 1, 1, 1);
INSERT INTO moduleContent (idModule, idVideo) VALUES (2, 2);
INSERT INTO moduleContent (idModule, idVideo) VALUES (3, 3);
INSERT INTO moduleContent (idModule, idVideo) VALUES (4, 4);
INSERT INTO moduleContent (idModule, idVideo) VALUES (5, 5);



INSERT INTO quizMultipleChoice (question, choice1, choice2, choice3, choice4) VALUES ( 'An example of leading projects is:', 'Waiting for others to tell me what to do next.', 'Organizing the food preparation at the shelter.', 'Talking on my cell phone.', 'Reading a magazine.');
INSERT INTO quizAnswer (answer) VALUES ('Organizing the food preparation at the shelter.');
INSERT INTO quizQuestion ( idMC, idAnswer, idQuiz) VALUES ( 1, 1, 1);


INSERT INTO quizMultipleChoice ( question, choice1, choice2) VALUES ( 'Taking care of my child is not a skill.', 'True', 'False');
INSERT INTO quizAnswer (answer) VALUES ('False');
INSERT INTO quizQuestion ( idMC, idAnswer, idQuiz) VALUES ( 2, 2, 1);


INSERT INTO quizMultipleChoice ( question, choice1, choice2, choice3, choice4) VALUES ('A unique selling point is:', 'Your special qualities that you want the employer to know.', 'Something you would like to do.', 'A sale at a retail store.', 'Something the employer should have.');
INSERT INTO quizAnswer (answer) VALUES ('Your special qualities that you want the employer to know.');
INSERT INTO quizQuestion ( idMC, idAnswer, idQuiz) VALUES ( 3, 3, 1);


INSERT INTO enrollment (idUser, idModule, completed, grade, compDate) VALUES ( 1, 1, 1, .75, DATE('2016-03-05'));
INSERT INTO enrollment (idUser, idModule) VALUES ( 2, 1);
