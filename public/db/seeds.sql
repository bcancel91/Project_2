use gq;
use gq;
-- , createdAt, updatedAt
-- USERS
ALTER TABLE `gq`.`Users` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT current_timestamp ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT current_timestamp ;
ALTER TABLE `gq`.`Instructors` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT current_timestamp ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT current_timestamp ;
ALTER TABLE `gq`.`Students` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT current_timestamp ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT current_timestamp ;

-- USERS INSERT
INSERT INTO users (email, password, instructor) VALUES 
-- 4 instructors
    ("test1@gmail.com", "test", true),
    ("test2@gmail.com", "test", true),
    ("test3@gmail.com", "test", true),
    ("test4@gmail.com", "test", true),
-- 10 students
    ("test5@gmail.com", "test", false),
    ("test6@gmail.com", "test", false),
    ("test7@gmail.com", "test", false),
    ("test8@gmail.com", "test", false),
    ("test9@gmail.com", "test", false),
    ("test10@gmail.com", "test", false),
    ("test11gmail.com", "test", false),
    ("test12@gmail.com", "test", false),
    ("test13@gmail.com", "test", false),
    ("test14@gmail.com", "test", false);

-- INSTRUCTORS INSERT
INSERT INTO instructors (email, name, UserId) VALUES
    ("test1@gmail.com", "test", 1),
    ("test2@gmail.com", "test", 2),
    ("test3@gmail.com", "test", 3),
    ("test4@gmail.com", "test", 4);

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
    
ALTER TABLE `gq`.`Classes` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT current_timestamp ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT current_timestamp ;

INSERT INTO classes (topic, description, date, time, capacity, price, InstructorId) VALUES
("Javascript Basics", "Learn all the basic functionlity in a 2 hour workshop", "2020-04-15", "4:30", 20, 20,1);
select * from classes;

-- ALTER TABLE `gq`.`UserClasses` 
-- CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT current_timestamp ,
-- CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT current_timestamp ;

