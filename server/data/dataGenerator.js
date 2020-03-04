const faker = require('faker');
const fs = require('fs');
const { performance } = require('perf_hooks');

//set the header
var header = 'id, name, slogan, description, category, default_price \n';

//create the dummy data
// 1000011 entries of sample data already in product table in database
var createFakeProduct = (num) => {
  var string = '';
  for (var i = 0; i < num; i++) {
    string += faker.fake(
      `${i +
        9000012}, "{{commerce.productName}}", "{{lorem.sentence}}", "{{lorem.paragraph}}", "{{commerce.product}}", {{random.number(400)}} \n`,
    );
  }
  return string;
};

//write the dummy data to the .csv file

//record the duration of running the data generation function
var t0 = performance.now();

try {
  fs.appendFileSync(
    '/Users/robgonzalez-pita/Desktop/DummyData/productTest10M.csv',
    header + createFakeProduct(1000000),
  );
  console.log('The data was appended to file!');
} catch (err) {
  console.log('error writing the files');
}

var t1 = performance.now();

console.log(
  'Call to write the a CSV file with 1M entries took ' +
    (t1 - t0) +
    ' milliseconds.',
);
