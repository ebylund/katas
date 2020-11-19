CREATE TABLE users (
  id serial PRIMARY KEY,
  email text,
  created_on timestamp DEFAULT NOW()
);

-- INSERT INTO users 
-- VALUES 
-- (DEFAULT, 'joe_blow@hotmail.com', DEFAULT),
-- (DEFAULT, 'joe_smo@hotmail.com', DEFAULT),
-- (DEFAULT, 'joe_somebody@hotmail.com', DEFAULT),
-- (DEFAULT, 'joe_him@hotmail.com', DEFAULT)
-- ;