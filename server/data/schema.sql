
DROP DATABASE IF EXISTS examples;

create database examples;

\c examples;

CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  name TEXT,
  slogan TEXT,
  description TEXT,
  category TEXT NOT NULL,
  default_price INTEGER
);

CREATE TABLE styles (
  id SERIAL PRIMARY KEY,
  productId INTEGER,
  name TEXT,
  sale_price TEXT,
  original_price INTEGER,
  default_style INTEGER,
  FOREIGN KEY (productId) REFERENCES product (id)
);

CREATE TABLE features (
  id SERIAL PRIMARY KEY,
  style_id INTEGER,
  val TEXT,
  attribute TEXT,
  FOREIGN KEY (style_id) REFERENCES styles (id)
);

CREATE TABLE skus (
  id SERIAL PRIMARY KEY,
  style_id INTEGER,
  size TEXT,
  quantity INTEGER,
  FOREIGN KEY (style_id) REFERENCES styles (id)
);

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  style_id INTEGER,
  url TEXT,
  thumbnail_url TEXT,
  FOREIGN KEY (style_id) REFERENCES styles (id)
);

COPY product
FROM
  '/Users/robgonzalez-pita/Desktop/UglyDog/PersonalRepofromColoradorca/ProjectGreenfield-Products/SDCFILES/Sample10/SampleProduct.csv' DELIMITER ',' CSV HEADER;

COPY styles
FROM
  '/Users/robgonzalez-pita/Desktop/UglyDog/PersonalRepofromColoradorca/ProjectGreenfield-Products/SDCFILES/Sample10/stylesSample.csv' DELIMITER ',' CSV HEADER;

COPY features
FROM
  '/Users/robgonzalez-pita/Desktop/UglyDog/PersonalRepofromColoradorca/ProjectGreenfield-Products/SDCFILES/Sample10/SampleFeatures.csv' DELIMITER ',' NULL AS 'null' CSV HEADER;

COPY skus
FROM
  '/Users/robgonzalez-pita/Desktop/UglyDog/PersonalRepofromColoradorca/ProjectGreenfield-Products/SDCFILES/Sample10/SampleSKUS.csv' DELIMITER ',' CSV HEADER;

COPY photos
FROM
  '/Users/robgonzalez-pita/Desktop/UglyDog/PersonalRepofromColoradorca/ProjectGreenfield-Products/SDCFILES/Sample10/SamplePhotos.csv' DELIMITER ',' CSV HEADER;