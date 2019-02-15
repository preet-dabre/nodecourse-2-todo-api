// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongdb server');
    const db = client.db('TodoApp');

    //findOneAndUpdate
    db.collection('Users').findOneAndUpdate({
        name: 'Preet Dabre'
    }, {
        $inc : {
            age: -1
        }
    }, {returnOriginal: false}).then( (result) => {console.log(result)});

    //client.close();
});
