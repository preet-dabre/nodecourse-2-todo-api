// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongdb server');
    const db = client.db('TodoApp');

    //deleteMany
    db.collection('Todos').deleteMany({text: 'Return Documents in college'}).then((result) => {
        console.log(result);
    });
    //deleteOne
    //deletes only first occurence
    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({text: 'Return'}).then((result) => {
        console.log(result);
    });

    //client.close();
});
