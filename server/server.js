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
    const data = await db.query("select * from post;");
    res.json(data.rows);
    console.log(data.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/add-post", async (req, res) => {
  try {
    const postData = req.body;
    const data = await db.query(
      `insert into post (username, content, age) values ($1,$2,$3);`,
      [postData.username, postData.content, postData.age]
    );
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
