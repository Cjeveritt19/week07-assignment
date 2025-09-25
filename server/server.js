import express from "express";
import cors from "cors";
import { db } from "./dbconnection.js";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.get("/post", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM posts;");
    res.json(results.rows);
    console.log(results.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
