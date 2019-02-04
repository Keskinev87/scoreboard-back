const Player = require('../data/Player')
const sorter = require('../utilities/sorter')
const levelCalc = require('../utilities/levelCalc')
const validator = require('../utilities/validator')

module.exports = {
    getPlayers: (req, res) => {
        //   Match.find({}).then(matches => {
        //       res.send(matches)
        //   })
        // }
        console.log(req.body);
        // console.log(typeof(req.body.filterCountries))
        let filterName = req.body.filterName;
        let filterCountries = req.body.filterCountries;
        let filterDateFrom = new Date(req.body.filterDateFrom).getTime();
        let filterDateTo = new Date(req.body.filterDateTo).getTime();
        let sortCriteria;
        let sortType = req.body.sortType;
        if(req.body.sortCriteria == 'date')
            sortCriteria = 'dateInMiliSeconds'
        else
            sortCriteria = req.body.sortCriteria;


        let query = {};
        if(filterName !== 'undefined' && filterName.length > 0) {
            query.name = {};
            query.name.$regex = filterName;
            query.name.$options = 'i';
            console.log(query);
        }
            
        if(filterCountries.length > 0) {
            query.country = {};
            query.country.$in = filterCountries;
        }

        if(!isNaN(filterDateFrom)){
            query.dateInMiliSeconds = {};
            query.dateInMiliSeconds.$gte = filterDateFrom;
            console.log(query);
        }
            
        if(!isNaN(filterDateTo)){
            if(query.dateInMiliSeconds)
                query.dateInMiliSeconds.$lte = filterDateTo;
            else {
                query.dateInMiliSeconds = {};
                query.dateInMiliSeconds.$lte = filterDateTo;
            }
            console.log(query);
        }
            
            

        Player.find(query).then((players) => {
            let sortedPlayers = sorter.sort(players,sortCriteria,sortType)
            res.status(200).json(sortedPlayers);
        }).catch((error)=> {
            res.status(500).json(error)
        })
    },
    addNewPlayer: (req, res) => {
        // console.log(req.body)
        let player = req.body;
        if(!player.name || !validator.validateName(player.name)){
            res.status(400).json("name");
        } 
        if(!player.country || !validator.validateCountry(player.country)){
            res.status(400).json("country");
        }
        if(!player.score || !validator.validateScore(player.score)) {
            res.status(400).json("score")
        }

        //TODO: Validation as with the front-end
        //Check for already existing names like this one

        //normalize the data
        player.country = player.country.toLowerCase();
        player.score = Number(player.score);
        player.registrationDate = new Date();
        player.level = levelCalc.getLevel(player.score);
        player.dateInMiliSeconds = new Date(player.registrationDate).getTime();

        Player.findOne({name: player.name}).then((playerExists) => {
            if(playerExists)
                res.status(400).json("exists")
            else {
                Player.create(player).then(() => {
                    console.log(player);
                    res.status(200).json("ok");
                }).catch(error => {
                    allPlayersSaved = false
                    res.status(500).json("error");
                    console.log(error)
                });
            }
        }).catch(error => {
            res.status(500).json("error");
            console.log(error);
        })
        
    },
    importBulk: (req, res) => {
        let players = req.body.players
        
        for (let player of players) {
            player.country = player.country.toLowerCase();
            player.score = Number(player.score);
            player.registrationDate = new Date(player.registrationDate);
            player.level = levelCalc.getLevel(player.score);
            player.dateInMiliSeconds = new Date(player.registrationDate).getTime();

            Player.create(player).then(() => {
                console.log(player);
                res.status(200).json("ok");
            }).catch(error => {
                allPlayersSaved = false
                res.status(500).json("error");
                console.log(error)
            });
        }
    }
}
  
  