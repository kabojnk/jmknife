// Node libraries
var fs = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser({attrkey: '@', explicitArray: false, mergeAttrs: true});
var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;
var jsonfile = require('jsonfile');

// Attempt to connect to the database...
dbConfig = jsonfile.readFileSync("dbconfig.json");

if (!dbConfig) {
	throw new Error("Unable to load dbconfig.json");
	return;
}



// Load kanjidic2 XML file...
var xml = fs.readFileSync('data/jmdict_replaced_entities.xml', 'utf8');

// Parse the XML...
console.log("Parsing XML...")
parser.parseString(xml, function(err, result){
	if (err) {
		throw err;
	}

	console.dir(result);
	return;
	
	// // Setup the mongodb URI for connecting...
	// var mongoUri = 'mongodb://';
	// if (dbConfig.username && dbConfig.username.length) {
	// 	mongoUri += dbConfig.username + '@' + dbConfig.password;
	// }
	// mongoUri += dbConfig.host+':'+dbConfig.port+'/'+dbConfig.database;

	// // Connect to the database...
	// MongoClient.connect(mongoUri, function(err, db) {
 //    if(err) throw err;

 //    // If any characters found, start inserting...
 //    if (result.kanjidic2.character != null) {
	// 		result.kanjidic2.character.forEach(function(element, index, array){
	// 			var collection = db.collection('dictionary');
	// 			console.log(format("On %s of %s", index+1, array.length));
	// 			collection.insert(element, function(err, docs){
	// 				if (err) throw err;

	// 				if (index == array.length - 1) {
	// 					console.log("DONE");
	// 					return;
	// 				}
	// 			});
	// 		});
	// 	}
 //  });
});

//console.log(xml);