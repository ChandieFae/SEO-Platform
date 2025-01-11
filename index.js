console.log("Hello, Railway!");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Existing route
app.get("/", (req, res) => {
    res.send("Hello, Railway!");
});

// New route
app.get("/greet", (req, res) => {
    res.send("Hello, from your new route!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
