const Player = require('../data/Player')

module.exports = {
    getPlayers: (req, res) => {
        //   Match.find({}).then(matches => {
        //       res.send(matches)
        //   })
        // }
        console.log(req.query);
        Player.find().then((players) => {
            res.status(200).json(players);
        }).catch((error)=> {
            res.status(500).json(error)
        })
    },
    addNewPlayer: (req, res) => {
        // console.log(req.body)
        let player = req.body;
        
        //TODO: Validation
       
        switch(true) {
            case player.score <= 20: 
                player.level = 1;
                break;
            case player.score <= 40:
                player.level = 2;
                break;
            case player.score <= 60:
                player.level = 3;
                break;
            case player.score <= 80:
                player.level = 4;
                break;
            case player.score <= 100:
                player.level = 5;
                break;
            default:
                player.level = 0;
                break; 
            }
        player.dateInMiliSeconds = new Date(player.registrationDate).getTime();

        Player.create(player).then(() => {
            console.log("player created");
            res.status(200).json("Success")
        }).catch(error => {
            allPlayersSaved = false
            res.status(500).json("Error when saving!")
            console.log(error)
        });
    }
}
  
  