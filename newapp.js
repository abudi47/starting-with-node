const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/signup", function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body['confirm-password'];

    if (password === confirmPassword) {
        // Registration logic here (e.g., save user to database)
        res.send("Registration successful!");
        console.log(email,password,confirmPassword)
    } else {
        res.send("Passwords do not match.");
    }
});

app.listen(3000, function() {
    console.log("Server running on port 3000");
});
//unique id 2a48f082ec