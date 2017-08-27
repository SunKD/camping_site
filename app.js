var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    User        = require("./models/user"),
    seedDB      = require("./seeds");
    
//Requiring Routes
var commnetRoutes   = require("./routes/comments"),
    campgroundRoute = require("./routes/campgrounds"),
    indexRoutes     = require("./routes/index");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/final_camping_site", {useMongoClient: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
//seedDB(); //seed the database

//Passport Configuration
app.use(require("express-session")({
    secret: "Life is Wonderful!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoute);
app.use("/campgrounds/:id/comments", commnetRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started!");
});