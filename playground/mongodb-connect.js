// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongdb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Prepare Resume',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Necil Dabre',
    //     age: 20,
    //     location: 'Vasai'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert into users', err);
    //     }
    //
    //     console.log(result.ops[0]._id.getTimestamp());
    // });


    client.close();
});
