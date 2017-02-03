INSERT INTO petFinder (user_name, email, password, zipcode_user, petID) VALUES ('oleg' , 'oleg@gmail.com', 'olegoleg', 90024 , 0);
INSERT INTO petFinder (user_name, email, password, zipcode_user, petID) VALUES ('bob' , 'bob@gmail.com', 'bobbob', 90021 , 1);
INSERT INTO petFinder (user_name, email, password, zipcode_user, petID) VALUES ('jim' , 'jim@gmail.com', 'jimbo', 90210 , 2);
INSERT INTO petFinder (user_name, email, password, zipcode_user, petID) VALUES ('carl' , 'junior@gmail.com', 'carls', 91770 , 3);
INSERT INTO petFinder (user_name, email, password, zipcode_user, petID) VALUES ('jack' , 'inthe@gmail.com', 'box', 90020 , 4);

INSERT INTO petId (petName, breed, petPic, animaltype, foundLost, comments, zipcode_pet) VALUES ('spot' , 'doverman', '../public/images/dog.jpg', 1 , 0, 'lost this dog please return', 90012);
INSERT INTO petId (petName, breed, petPic, animaltype, foundLost, comments, zipcode_pet) VALUES ('cliff' , 'doverman', '../public/images/dog.jpg', 0 , 1, 'lost this dog please return', 90012);
INSERT INTO petId (petName, breed, petPic, animaltype, foundLost, comments, zipcode_pet) VALUES ('jake' , 'doverman', '../public/images/dog.jpg', 0 , 1, 'lost this dog please return', 90012);
INSERT INTO petId (petName, breed, petPic, animaltype, foundLost, comments, zipcode_pet) VALUES ('bryan' , 'doverman', '../public/images/dog.jpg', 1 , 1, 'lost this dog please return', 90012);
INSERT INTO petId (petName, breed, petPic, animaltype, foundLost, comments, zipcode_pet) VALUES ('moe' , 'doverman', '../public/images/dog.jpg', 0 , 0, 'lost this dog please return', 90012);

^old

new
SELECT * FROM spotfinder_db.petfinders;
USE spotfinder_db;
INSERT INTO petFinders (userName, email, password, zipcode_user, petID,createdAt, updatedAt) VALUES ('oleg' , 'oleg@gmail.com', 'olegoleg', 90024 , 0, NOW(),NOW());
INSERT INTO petFinders (userName, email, password, zipcode_user, petID,createdAt, updatedAt) VALUES ('bob' , 'bob@gmail.com', 'bobbob', 90021 , 1,NOW(),NOW());
INSERT INTO petFinders (userName, email, password, zipcode_user, petID,createdAt, updatedAt) VALUES ('jim' , 'jim@gmail.com', 'jimbo', 90210 , 2,NOW(),NOW());
INSERT INTO petFinders (userName, email, password, zipcode_user, petID,createdAt, updatedAt) VALUES ('carl' , 'junior@gmail.com', 'carls', 91770 , 3,NOW(),NOW());
INSERT INTO petFinders (userName, email, password, zipcode_user, petID,createdAt, updatedAt) VALUES ('jack' , 'inthe@gmail.com', 'box', 90020 , 4,NOW(),NOW());