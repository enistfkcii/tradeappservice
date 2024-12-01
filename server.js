const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const costRoutes = require("./routes/costRoutes");
app.use("/api/costs", costRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
