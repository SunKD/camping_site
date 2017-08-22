var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


 var campgrounds = [
        {name: "Alta Lake", image: "https://s-media-cache-ak0.pinimg.com/originals/40/d8/7d/40d87d82dc61f8b076ce38f887550975.jpg"},
        {name: "Curlew Lake", image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/86/18/01/black-beach-resort-is.jpg"},
        {name: "Fort Flagler", image: "http://www.campinginthenorthwest.com/1000_750_csupload_47164730.jpg?u=1151210587"},
        {name: "Alta Lake", image: "https://s-media-cache-ak0.pinimg.com/originals/40/d8/7d/40d87d82dc61f8b076ce38f887550975.jpg"},
        {name: "Curlew Lake", image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/86/18/01/black-beach-resort-is.jpg"},
        {name: "Fort Flagler", image: "http://www.campinginthenorthwest.com/1000_750_csupload_47164730.jpg?u=1151210587"},
        {name: "Alta Lake", image: "https://s-media-cache-ak0.pinimg.com/originals/40/d8/7d/40d87d82dc61f8b076ce38f887550975.jpg"},
        {name: "Curlew Lake", image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/86/18/01/black-beach-resort-is.jpg"},
        {name: "Fort Flagler", image: "http://www.campinginthenorthwest.com/1000_750_csupload_47164730.jpg?u=1151210587"}
    ];
    
app.get("/", function(req, res){
    res.render("landing");
});


app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image =req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started!");
});