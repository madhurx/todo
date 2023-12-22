import express from "express";
const cors = require('cors');
import task from "./routes/taskRoute";

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/", task);

export default app;
