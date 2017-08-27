var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Alta Lake",
        image: "https://s-media-cache-ak0.pinimg.com/originals/40/d8/7d/40d87d82dc61f8b076ce38f887550975.jpg",
        description: "Alta Lake State Park is a publicly owned recreation area located 2 miles southwest of Pateros, Washington, at the northern end of 220-acre Alta Lake, in the mountainous northwest interior of the state."
    },
    {   
        name: "Curlew Lake", 
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/86/18/01/black-beach-resort-is.jpg",
        description: "Curlew Lake State Park is a 123-acre Washington state park located on Curlew Lake in Ferry County. It is not far from a public access paleontology site and an airfield."
    },
    {
        name: "Fort Flagler", 
        image: "http://www.campinginthenorthwest.com/1000_750_csupload_47164730.jpg?u=1151210587",
        description: "Fort Flagler State Park is a Washington state park on the site of Fort Flagler, a former United States Army fort at the northern end of Marrowstone Island. Fort Flagler was a Coast Artillery fort. It was established in 1897 and activated on in 1899."
    }
];



function seedDB(){
    //remove all the campgrounds
        Campground.remove({}, function(err){
        /*if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                }else{
                    console.log("added a campground");
                    //create a comment
                    Comment.create({
                        text: "This place is great, but I wish there was a toilet",
                        author: "Atom"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        }
                        campground.comments.push(comment);
                        campground.save();
                        console.log("Created new comment");
                    });
                }
            });
        }); */
    }); 
  
    
}

module.exports = seedDB;