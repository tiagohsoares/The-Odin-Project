import express from "express"
import path from "node:path"

const app = express()

app.get("/", (req, res) => {
    res.render("index", { message: "EJS rocks!" });
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if(error) {
        throw error;
    }
    console.log(`My first Express app - listening on port ${PORT}!`)
})