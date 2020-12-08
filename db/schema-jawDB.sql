USE vf9bmk358q593g6u;

CREATE TABLE polls (
	id INT AUTO_INCREMENT NOT NULL,
    user VARCHAR(30) NOT NULL,
    question VARCHAR(30) NOT NULL,
    optionOne VARCHAR(30) NOT NULL,
    optionTwo VARCHAR(30) NOT NULL,
    optionThree VARCHAR(30) NOT NULL,
    optionFour VARCHAR(30) NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE votes (
	id INT AUTO_INCREMENT NOT NULL,
    optionSelect VARCHAR(30) NOT NULL,
    pollId INT NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (pollId) REFERENCES polls(id)
);
