const express = require('express');
const app = express();

//great use of `` with h1, br, and a tags
//great job connecting / to /:number_of_bottles
//I would recommend working into the bonus, little bugs in the code so you can get more practice adding logic.
//I put my solution at the end of the file if you are interested, but if you want to try later, don't look!

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


//little bugs in the code
app.get('/:number', (req, res) => {
  let number = parseInt(req.params.number)
  let next = number - 1
  if (number === randomNum) {
      number += 20
      console.log(number, 'this is number')
      console.log(next, 'this is next')
      randomNum = Math.floor(Math.random() * (0, 99) + 1)
      console.log(randomNum)
      res.send(`
          <h1>${number} little bugs in the code.</h1>
          <a href='/${number - 1}'>take one down, pass it around...</a>
      `)

  } else if (number > 0) {
      res.send(`
          <h1>${number} little bugs in the code.</h1>
          <a href=/${next}>take one down, pass it around...</a>
      `)
  } else if (number === 0)res.send(`
      <h1>All the beer is gone!</h1>
      <a href='/'>Start Over</a>
      `)
})





app.listen(4000, () => {
  console.log('listening');
});

