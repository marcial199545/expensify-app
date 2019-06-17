const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "..", "public");
app.set("PORT", process.env.PORT || 8282);

app.use(express.static(publicPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(app.get("PORT"), () => {
    console.log(`listening to port: ෴෴${app.get("PORT")}෴෴`);
});
