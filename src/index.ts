import express from "express";
import swaggerUi from "swagger-ui-express";

import swaggerSetUpFile from "../swaggerSetUpFile.json";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSetUpFile));

app.use("/users", usersRoutes);

export { app };
