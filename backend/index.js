const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect("mongodb+srv://chauhandhruv903:root@cluster0.bpu9v4a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

const authRoutes = require("./routes/auth");

app.use("/api/auth", authRoutes);

