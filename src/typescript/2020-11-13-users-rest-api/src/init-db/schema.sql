CREATE TABLE users (
  id serial PRIMARY KEY,
  first_name text,
  last_name text,
  email text,
  dob timestamp,
  created_on timestamp DEFAULT NOW(),
  updated_on timestamp DEFAULT NOW()
);
