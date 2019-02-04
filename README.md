# Name:Scoreboard API

# Description:
This API provides the options to store players and their points. You can then fetch all players filtered and sorted by different criteria.

# Data
  You can store the following fields for all players: name, country, date of registration, score. 
  You can filter and sort the data by all fields.

# Installation 
Prerquisites: 
MongoDB v 4.0: https://docs.mongodb.com/manual/installation/, 
npm v 4.2.0: https://www.npmjs.com/get-npm
After installing npm, just clone the project, go to the root directory and run 'npm install' in the console.
After all packages are installed, you can type 'nodemon' in the console and that will run the project locally. Nodemon will automatically restart the server after you make a change. Alternatively use 'npm start' or 'node index.js'

# API endpoints
  You must send the data in JSON. Use the following query options when fetching:
	
  queryOptions = {
  	method: "POST",
    headers: {
    	"Content-Type": "application/json"
    }
    body: JSON.stringify(params) ====> attach your query parameters here.  
  }
	Add new player: 
	 		path: /players/add
			body: {
				name: (required, max-length: 80 chars, alphanumeric),
				country: (required, max-length: 50 chars, alphanumeric),
				score: (required, between 0 and 100, numeric)
			};
	Query players:
			path: /players
			body: {
				filterName: String,
				filterCountries: Array,
				filterDateFrom: '2019-02-05',
				filterDateTo: '2019-02-06',
				sortCriteria: 'name'/'country'/'score'/'date',
				sortType: 'ascending'/'descending 
			}
			
