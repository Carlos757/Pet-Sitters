import express, { json } from "express";
import morgan from "morgan";
/* Rutas */
import petSitterRoutes from "./routes/petSitter.routes";

const app = express();

/* Configuración */
app.set("port", 4000);

/* Middlewares */
app.use(morgan("dev"));
app.use(express.json());

/* Rutas */
app.use("/api/pet-sitters", petSitterRoutes);

export default app;