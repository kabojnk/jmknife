var fs = require('fs');
var jsonfile = require('jsonfile');

// Load all of the entities
entities = jsonfile.readFileSync('./data/entities.json');


fs.readFile('./data/jmdict.xml', 'utf-8', function(err, data){
	if (err) {
		return console.log(err);
	}

	for (var entity in entities) {
		if (entities.hasOwnProperty(entity)) {
			var encodedEntity = '&'+entity+';';
			var regex = new RegExp(encodedEntity, 'g');
			console.log("replacing " + encodedEntity + " with " + entities[entity]);

			data = data.replace(regex, entities[entity]);
		}
	}

	fs.writeFile('./data/jmdict-new.xml', data, 'utf-8', function(err) {
		if (err) return console.log(err);
		console.log("Done");
	});
});
