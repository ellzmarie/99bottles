const express = require('express');
const app = express();


app.get("/", (req, res) => {
  res.send(`
  <h1>99 bottles of beer on the wall, 99 bottles of beer.
  <br><a href="/98">Take one down, pass it around...</a></br></h1> 
  `) 
});

app.get("/:number_of_bottles", (req, res) => {
  let num_bottles = req.params.number_of_bottles
  if (num_bottles > 0) {
    res.send(`<h1>...${num_bottles} bottles of beer on the wall!<br> 
    <br>${num_bottles} bottles of beer on the wall, ${num_bottles} bottles of beer...</br>  
    <a href="/${num_bottles - 1}">Take one down, pass it around...</a>
    </h1>`)
  } else {
    res.send(`<a href="/">Let's run it back and start over!</a>`)
    }
})

app.listen(4000, () => {
  console.log('listening');
});