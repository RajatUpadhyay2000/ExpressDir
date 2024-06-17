const express = require('express');
const app = express();

//console.dir(app);

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req,res) => {
//     //console.log(req);
//     console.log("new incoming request");
//     // res.send("This is basic string");
//     // res.send({
//     //     name : "Apple",
//     //     color : "red"
//     // });
//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Orange</li></ul>"
//     res.send(code);
// });

// app.get("/", (req,res) => {
//     res.send("You cntected root path");
// });

// app.get("/apple", (req, res) => {
//     res.send("You contacted Apple path");
// });

// app.get("/orange",(req,res) => {
//     res.send("You contacted Orange Path");
// });

// app.get("*", (req,res) => {
//     res.send("This Path is not exist");
// });

// app.post("/",(req,res) => {
//     res.send("This is a post request");
// });

app.get("/",(req,res) => {
    res.send("Hello, This is root");
});

app.get("/:username/:id", (req, res) => {
   // console.log(req.params);
   let {username , id} = req.params;
    res.send(`Welcome to the page of @${username}`);
});

app.get("/search",(req,res) => {
   // console.log(req.query);
   let {q} = req.query;
   if(!q){
    res.send("<h1>Nothing Searched</h1>");
   }
    res.send(`search result for query: ${q}`);
});