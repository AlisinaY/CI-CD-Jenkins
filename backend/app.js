const express = require("express");


const app = express();


app.get("/", function (req, res) {
    res.send("Hello Leute, ist nur zum Testen"); 
})

app.get("/helloWorld", function (req, res) {
    res.send("Hello World Leute, ist nur zum Testen"); 
})



app.listen(5000, function () {
    console.log("Server started on port 5000");
});