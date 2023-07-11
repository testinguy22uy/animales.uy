import express from "express";
import UserRoutes from "./routes/user.routes.js"


const app = express();

app.set("port", process.env.NODE_DOCKER_PORT || process.env.PORT || 3000);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
})

app.use("/api/user", UserRoutes);


export default app;