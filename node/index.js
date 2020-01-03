const mysql = require('mysql');
const express = require('express');
const path = require('path')
var app = express();
var cors = require('cors');
// const bodyparser = require('body-parser');
const formidable = require("express-formidable");
var fs = require("fs");
// app.use(bodyparser.json());
app.use(formidable());
app.use(cors({ origin: 'http://localhost:3001' }));
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'Abcd@1234',
    database: 'db'
});
mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection success')
    else
        console.log('db connection failed \n error :' + JSON.stringify(err, undefined, 2));
});
app.listen(3001, () => console.log('express server is running'));
app.use(express.static(path.join(__dirname, '..', 'src')));
// app.get("/", function(req, res) {
//     res.sendFile("/home/vishnu/Desktop/awwwards/src/index.html")
// })
// app.get("/", function(req, res) {
//     res.sendFile("/home/vishnu/Desktop/awwwards/src/index.css")
// })
// app.get("/", function(req, res) {
//     res.sendFile("/home/vishnu/Desktop/awwwards/src/script/function.js")
// })

// app.get("/", function(req, res) {
//     res.sendFile("home/vishnu/Desktop/awwwards/src/assets/icons8-facebook-50.png")
// })
// app.get("/", function(req, res) {
//     res.sendFile("home/vishnu/Desktop/awwwards/src/assets/icons8-instagram-26.png")
// })
// app.get("/", function(req, res) {
//     res.sendFile("home/vishnu/Desktop/awwwards/src/assets/icons8-menu-24.png")
// })
// app.get("/", function(req, res) {
//     res.sendFile("home/vishnu/Desktop/awwwards/src/assets/icons8-search-24.png")
// })
// app.get("/", function(req, res) {
//     res.sendFile("home/vishnu/Desktop/awwwards/src/assets/icons8-twitter-26.png")
// })
// app.get("/", function(req, res) {
//     res.sendFile("home/vishnu/Desktop/awwwards/src/assets/images.png")
// })
app.get('/get', (res, req) => {
    mysqlConnection.query('SELECT * FROM studentregister', (err, rows, fields) => {
        if (!err)
            res.write(rows);
        else
            console.log(err);
    })
})
app.post('/insert', (req, res) => {
    console.log("done")
    console.log(req.files);
    console.log("field", req.fields.firstname);
    var path1 = req.files.pic.path;
    var path2 = path.join(__dirname, `/public`, req.files.pic.name);
    fs.rename(path1, path2, function(err) {
        if (err) {
            throw err;
        }
    })
    console.log(path2)
    mysqlConnection.query('INSERT INTO studentregister(firstname,lastname,dob,university,degree,stream,yearofpassing,image) VALUES(?,?,?,?,?,?,?,?)', [
            req.fields.firstname,
            req.fields.lastname,
            req.fields.dob,
            req.fields.university,
            req.fields.degree,
            req.fields.stream,
            req.fields.yearofpassing,
            path2,
        ],
        function(error, results, fields) {
            if (error) throw error;
            console.log('success');
            res.end('success');

        }
    )
    console.log('failed')
    res.send('failed');

})