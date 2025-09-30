import express from "express";
import { config } from "dotenv";
import router from "./routes/index.routes.js";

config(); 
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json()); 
app.use("/", router);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});