module.exports = {
  index: (req, res) => {
    console.log("Home requested")
    res.send("API Online")
  }
}
