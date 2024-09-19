import express from 'express'

const app = express()

app.get("/", (req, res) => {
  res.send("Hello world 123")
} )

app.listen(8000, () => {
  console.log("server is running at port 8000")
});
