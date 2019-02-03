const controllers = require('../controllers')



module.exports = (app) => {
  // app.use('/user', passport.authenticate('jwt', {session: false}));
  app.get('/', controllers.home.index)
  app.post('/players', controllers.players.getPlayers)
  app.post('/players/add', controllers.players.addNewPlayer)
  app.post('/players/importBulk', controllers.players.importBulk)
 

  app.all('*', (req, res) => {
    res.status(404).send('404 Not Found!')
    res.end()
  })
}
