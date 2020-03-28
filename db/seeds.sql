use gq;

ALTER TABLE `gq`.`Users` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT current_timestamp ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT current_timestamp ;
ALTER TABLE `gq`.`Instructors` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT current_timestamp ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT current_timestamp ;
ALTER TABLE `gq`.`Students` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT current_timestamp ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT current_timestamp ;
ALTER TABLE `gq`.`Classes` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT current_timestamp ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT current_timestamp ;

-- USERS INSERT
INSERT INTO users (email, password, instructor) VALUES 
-- 4 instructors
    ("test1@gmail.com", "11111111", true),
    ("test2@gmail.com", "22222222", true),
    ("test3@gmail.com", "33333333", true),
    ("test4@gmail.com", "44444444", true),
-- 10 students
    ("test5@gmail.com", "123123123", false),
    ("test6@gmail.com", "123123123", false),
    ("test7@gmail.com", "123123123", false),
    ("test8@gmail.com", "123123123", false),
    ("test9@gmail.com", "123123123", false),
    ("test10@gmail.com", "123123123", false),
    ("test11gmail.com", "123123123", false),
    ("test12@gmail.com", "123123123", false),
    ("test13@gmail.com", "123123123", false),
    ("test14@gmail.com", "123123123", false);
-- select * from Users;

-- INSTRUCTORS INSERT

INSERT INTO instructors (email, name, UserId) VALUES
    ("test1@gmail.com", "Jack Storrs", 1),
    ("test2@gmail.com", "Peter Colella", 2),
    ("test3@gmail.com", "James Meier", 3),
    ("test4@gmail.com", "Innana D'Abreau", 4);
    
-- select * from instructors;

INSERT INTO students (email, name, UserId) VALUES
    ("test5@gmail.com", "test", 5),
    ("test6@gmail.com", "test", 6),
    ("test7@gmail.com", "test", 7),
    ("test8@gmail.com", "test", 8),
    ("test9@gmail.com", "test", 9),
    ("test10@gmail.com", "test", 10),
    ("test11gmail.com", "test", 11),
    ("test12@gmail.com", "test", 12),
    ("test13@gmail.com", "test", 13),
    ("test14@gmail.com", "test", 14);
-- select * from students;
  
INSERT INTO classes (topic, description, datetime, duration, capacity, price, InstructorId) VALUES
("Javascript 101", "You will learn how to use JavaScript to communicate with users, modify the Document Object Model (DOM), control program flow, validate forms, animate images, create cookies, change HTML on the fly, and communicate with databases.", "4/15/2020 18:30", 60, 20, 20, 1),
("Node for beginners", "Node.js for Beginners: learn everything you need to become a Node.js Developer with practical exercises & projects", "2020-05-15 16:30", 90, 20, 30, 1),
("Node Workshop", "You'll learn how asynchronous code works in Node and the Node event loop, as well as how to use the event emitter, streams, buffers, pipes, and work with files. We'll see how that leads to building a web server in Node.", "2020-06-15 18:30", 60, 20, 40, 2),
("Express explained", "We'll dive into web sites, web apps and APIs with Express and learn how Express can save us time as Node developers.", "2020-04-15 14:30", 30, 20, 15, 3),
("Handlebars: practical workshop", "Handlebars is the most widely used JavaScript templating library, supporting both client-side and server-side applications. In this course, Handlebars is covered from basic concepts all the way to production-ready tactics.", "2020-04-22 18:30", 90, 30, 40, 4),
("Learn Git Branching in 20 minutes", "Learn to save and manage different versions of your code projects with this essential tool. Short introduction class.", "2020-04-22 15:30", 20, 30, 10, 3);
select * from classes;