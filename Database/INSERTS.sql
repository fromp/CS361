INSERT INTO module (name, description) VALUES ('Module 1', 'This is a test module for testing. Brought to you by the Reduncancy Department of Redundancy.');
INSERT INTO module (name, description) VALUES ('Module 2', 'Preparing for an Interview.');
INSERT INTO module (name, description) VALUES ('Module 3', 'Common Interview Questions.');

INSERT INTO moduleContent (idModule, idVideo) VALUES (1, 1);
INSERT INTO moduleContent (idModule, idVideo) VALUES (2, 2);
INSERT INTO moduleContent (idModule, idVideo) VALUES (3, 3);

INSERT INTO video (name, filePath) VALUES ('Testing Video', 'video1.php');
INSERT INTO video (name, filePath) VALUES ('Preparation Video', 'videoPrep.php');
INSERT INTO video (name, filePath) VALUES ('Common Questions Video', 'videoQues.php');

INSERT INTO reading (name, content) VALUES ('Test Reading', 'This text should be visible.');

INSERT INTO quizMultipleChoice (choice1, choice2, choice3, choice4) VALUES ('first choice', 'second choice', 'third choice', 'fourth choice');

INSERT INTO quizAnswer (answer) VALUES ('second choice');

INSERT INTO quizQuestion (idMC, idAnswer) VALUES (1, 1);

INSERT INTO quiz (name, idQQ) VALUES ('Quiz 1', 1);



INSERT INTO shelter (name, addressLine1, addressLine2, city, state, postalCode, phone) VALUES ('Central Shelter for Women', '12 Main St.', 'Suite 2B', 'Los Angeles', 'CA', '95141', '221-221-2221');

INSERT INTO user (lastName, firstName, email, password, idShelter) VALUES ('Doe', 'Jane', 'my@email.com', 'mypassword', 1);