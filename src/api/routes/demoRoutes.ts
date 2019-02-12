import { Router, Request, Response, NextFunction } from "express";

import DemoController from "../controllers/demoController";

class DemoRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.all("/", this.demo);
  }

  private demo(req: Request, res: Response, next: NextFunction) {
    // res.setHeader("Content-Type", "text/event-stream");
    // res.setHeader("Cache-Control", "no-cache");
    switch (req.method) {
      case "POST":
        return DemoController.store();
      case "GET":
        return DemoController.show();
      case "PUT":
        return DemoController.update();
      case "DELETE":
        return DemoController.destroy();
    }
  }
}

export default DemoRoutes;
