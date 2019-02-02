module.exports = {
  index: (req, res) => {
    console.log("Home requested")
    res.sendFile(__dirname + '../../client/index.html');
  }
}
