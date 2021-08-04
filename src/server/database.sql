CREATE DATABASE sukadurian;

CREATE TABLE profiles(
    -- pid uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    pid SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100) NOT NULL,
    password TEXT NOT NULL,
    MobileNumber BIGINT NOT NULL
);

SELECT * FROM profiles;

ALTER TABLE profiles ALTER COLUMN MobileNumber TYPE VARCHAR(50);

DELETE FROM profiles WHERE name='JJ';

ALTER TABLE profiles ALTER COLUMN pid TYPE PRIMARY KEY DEFAULT uuid_generate_v4();

-- new table!
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_mobilenumber VARCHAR(255) NOT NULL
);

INSERT INTO users (user_name, user_email, user_password, user_mobilenumber) VALUES ('JJ Choon', 'jjchoon1@g.ucla.edu', 'jjc', '6268775677');

DELETE FROM users WHERE user_name = 'JJ Choon'

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNmMxZGNhNjAtNjgxNy00MmQ4LTkzYzgtOWQ3ODJmNGYwMmFkIiwiaWF0IjoxNjI2ODMyMTM2LCJleHAiOjE2MjY4MzIxNTZ9.kd7Qd5xypW7rNDe3S83FGai3rmcxfOs-OpYwkQnSPQw