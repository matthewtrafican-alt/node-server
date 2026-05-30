const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>Matt's Joke Machine 🤖</h1>
    <button onclick="getJoke()">Get a Joke</button>
    <p id="setup"></p>
    <p id="punchline"></p>
    <script>
      async function getJoke() {
        const res = await fetch("/joke");
        const data = await res.json();
        document.getElementById("setup").innerText = data.setup;
        document.getElementById("punchline").innerText = data.punchline;
      }
    </script>
  `);
});

app.get("/joke", async (req, res) => {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const joke = await response.json();
  res.json(joke);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});