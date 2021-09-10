const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 4005;

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/css", (req, res) => {
	res.sendFile(path.join(__dirname, "../styles.css"));
});

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});
