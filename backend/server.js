const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
