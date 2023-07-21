import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5000;
import app from "./app";

//Iniciar servidor
app.listen(3000, () => console.log(`listeniing at port: 3000`));