CREATE DATABASE SushiClicker

USE SushiClicker

CREATE TABLE BrukerScore (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    score INT DEFAULT 0,
    multiply_clicks INT DEFAULT 1,
    chefs INT DEFAULT 0,
    chef_click_multiplier INT DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES Brukere(id)
);


CREATE TABLE Brukere (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    email varchar(100) NOT NULL,
    passord varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO Brukere (name, email, passord) VALUES ("Bob", "Bob@gmail.com", "Bob123")
INSERT INTO Brukere (name, email, passord) VALUES ("max", "max@gmail.com", "max123456")
INSERT INTO Brukere (name, email, passord) VALUES ("Sigma", "Ligma@gmail.com", "Balls555")

