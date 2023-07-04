import app from "./app.js";
import "./database.js";

const port = 3000;

app.listen(port);
console.log("Server on port", port);