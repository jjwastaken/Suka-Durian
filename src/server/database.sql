CREATE DATABASE sukadurian;

CREATE TABLE profiles(
    pid SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100) NOT NULL,
    password TEXT NOT NULL,
    MobileNumber BIGINT NOT NULL
);

SELECT * FROM profiles;

ALTER TABLE profiles ALTER COLUMN MobileNumber TYPE VARCHAR(50);

DELETE FROM profiles WHERE name='JJ';