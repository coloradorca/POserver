DROP DATABASE IF EXISTS productoverview;


create database productoverview;

\c productoverview;


CREATE TABLE product (id SERIAL PRIMARY KEY,
                                        name TEXT, slogan TEXT, description TEXT, category TEXT NOT NULL,
                                                                                                default_price INTEGER);


CREATE TABLE styles (style_id SERIAL PRIMARY KEY,
                                             product_Id INTEGER, name TEXT, sale_price TEXT, original_price INTEGER, default_style INTEGER,
                     FOREIGN KEY (product_Id) REFERENCES product (id));


CREATE TABLE features (id SERIAL PRIMARY KEY,
                                         style_id INTEGER, feature TEXT, value TEXT,
                       FOREIGN KEY (style_id) REFERENCES styles (style_id));


CREATE TABLE skus (id SERIAL PRIMARY KEY,
                                     style_id INTEGER, size TEXT, quantity INTEGER,
                   FOREIGN KEY (style_id) REFERENCES styles (style_id));


CREATE TABLE photos (id SERIAL PRIMARY KEY,
                                       style_id INTEGER, url TEXT, thumbnail_url TEXT,
                     FOREIGN KEY (style_id) REFERENCES styles (style_id));

COPY product
FROM '~/CSVFILES/sampleProduct.csv'
DELIMITER ',' CSV HEADER;

COPY styles
FROM '~/CSVFILES/sampleStyle.csv'
DELIMITER ',' CSV HEADER;

COPY features
FROM '~/CSVFILES/sampleFeatures.csv'
DELIMITER ',' NULL AS 'null' CSV HEADER;

COPY skus
FROM '~/CSVFILES/sampleSKUS.csv'
DELIMITER ',' CSV HEADER;

COPY photos
FROM '~/CSVFILES/samplephotos.csv'
DELIMITER ',' CSV HEADER;

