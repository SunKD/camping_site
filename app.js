var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/final_camping_site", {useMongoClient: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


//Setup Schema
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

/*Campground.create(
    {
        name: "Alta Lake",
        image: "https://s-media-cache-ak0.pinimg.com/originals/40/d8/7d/40d87d82dc61f8b076ce38f887550975.jpg"
        
    }, function(err, campground){
        if(err){
            console.log(err);
        }else{
            console.log("Newly Created Campground: ");
            console.log(campground);
        }
    });*/
    
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
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds", {campgrounds: allCampgrounds});
        }
    });
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image =req.body.image;
    var newCampground = {name: name, image: image};
    //create new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else{
            res.redirect("/campgrounds");
        }
    });
    
    //redirect back to campgrounds page
   // res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started!");
});