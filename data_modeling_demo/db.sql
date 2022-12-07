CREATE TABLE users (
    user_id SERIAL PRIMARY KEY
    email VARCHAR(100),
    password VARCHAR(10)
);

CREATE TABLE groups (
    group_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    user_id INTEGER NOT NULL REFERENCES users(user_id),
);

CREATE TABLE user_group (
    user_id INT NOT NULL REFERENCES users(user_id),
    group_id INT NOT NULL REFERENCES groups(group_id),
);

CREATE TABLE posts (`
    post_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(user_id),
    group_id INT NOT NULL REFERENCES groups(group_id),
    content TEXT
);

CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    post_id INT NOT NULL REFERENCES posts(post_id),
    user_id INT NOT NULL REFERENCES users(user_id),
    content TEXT
);

INSERT INTO user
