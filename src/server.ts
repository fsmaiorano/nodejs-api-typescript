import express from "express";
import * as bodyParser from "body-parser";
import cors from "./utilities/cors";
import DemoRoutes from "./api/routes/demoRoutes";

class Server {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(cors);
  }

  routes(): void {
    this.express.use("/api/demo", new DemoRoutes().router);
  }
}

export default new Server().express;
