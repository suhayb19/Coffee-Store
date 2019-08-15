const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

app.use(express.json({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//     res.redirect("/home");
// });

// Routes middleware
app.use("/home", require("./routers/home.js"));
app.use("/news", require("./routers/news.js"));
app.use("/contact", require("./routers/contact.js"));
app.use("/about", require("./routers/about.js"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
