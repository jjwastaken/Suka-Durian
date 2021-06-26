CREATE DATABASE sukadurian;

CREATE TABLE profiles(
    pid SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100) NOT NULL,
    password TEXT NOT NULL,
    MobileNumber BIGINT NOT NULL
);

SELECT * FROM profiles;