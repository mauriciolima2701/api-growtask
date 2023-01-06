import express from "express";
import cors from "cors";
import router from "./routes/routes";

const api = express();

const port = process.env.PORT || 3030;

api.use(express.json(), cors(), router);

api.listen(port, () => console.log(`Server running .... port ${port}`));
