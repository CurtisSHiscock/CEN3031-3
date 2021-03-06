/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    listing = require('./ListingSchema.js'), 
    config = require('./config');
	//listings = require('./listings.json');

/* Connect to your database */
mongoose.connect(config.db.uri);


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   
   listing.find({name: 'Library West'}, function(err, listing) {
	   if (err) throw err;
		console.log("Result: "+ listing);
	});  
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
	listing.findOneAndRemove({ code: 'CABL' }, function(err) {
		if (err) throw err;
	console.log('listing deleted!');
});
   
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
listing.findOneAndUpdate({name: 'Phelps Laboratory' }, {address:'Gainesville, FL 32605'}, function(err, user) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(user);
});
};

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  listing.find({}, function(err, listings) {
  if (err) throw err;

  // object of all the users
  console.log(listings);
});
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
