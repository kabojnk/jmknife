# Installation

	npm install

# Configuration

Copy the file `dbconfig.dist.json` to `dbconfig.json` and edit the new file. Fill out your mongodb credentials.

# If using your own jmdict.xml file 

If you downloaded an updated version of the XML file to use, make sure to replace all of the XML entities in the file first. xml2js (its SAX dependency, in particular) does not like XML entities. You can do this with the following utility script:

	node replace_entities.js

*You may need to edit the file to set the name of the XML file you need*

# Usage

	node kdknife.js

