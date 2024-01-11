const express = require("express");
const cors = require("cors");
const app = express();
const port = 4200;
const router = express.Router();

require("dotenv/config");

//Importing Routes
const { authRoutes, verifyUser } = require("./Services/Auth");
const { listRoutes } = require("./Services/listing");

// Add cors for frontend
app.use(cors());

// Middleware for logging
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});

// Parse data as json
app.use(express.json());

// Install the router at /api
app.use("/api", router);

//Routes
router.use("/auth", authRoutes);
router.use("/listing", listRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
