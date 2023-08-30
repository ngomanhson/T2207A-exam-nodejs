const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Server is running...");
});

require("./src/db/database");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productrouter = require("./src/routes/product.routes");
app.use("/", productrouter);
