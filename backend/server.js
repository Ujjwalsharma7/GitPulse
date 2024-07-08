import express from "express";
import userRoutes from "./routes/user.route.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/user", userRoutes);
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
