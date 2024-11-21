const { MongoClient } = require('mongodb');

const url = 
    "mongodb+srv://shashanknv:nvsr1234@namastenode.qliva.mongodb.net/";

const client = new MongoClient(url);

const dbName = 'HelloWorld';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  //INSERT DOCUMENT
  const data = {
    firstname: "Dhanush",
    lastname: "Gowda",
    city: "Sira"
  };

//   const insertResult = await collection.insertMany([data]);
//   console.log('Inserted documents =>', insertResult);

//   //READ DOCUMENT
//   const findResult = await collection.find({}).toArray();
//   console.log('Found documents =>', findResult);

//   const countResult = await collection.countDocuments({});
//   console.log("count of documents in the User collection :", countResult);

  //Find all documents with a filter of firstname: Dhanush
  const result = await collection.find({firstname: "Dhanush"}).toArray();
  console.log("result: ", result);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());




// Go to mongodb website
// create a free M0 server
// create a user 
// get the connection string 
// install mono db compass

