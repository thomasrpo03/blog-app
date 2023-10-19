import dotenv from "dotenv";
import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import articleRoutes from "./routes/article.routes";

dotenv.config();

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set("port", this.port);
  }

  middlewares() {
    this.app.use(morgan(`dev`));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use("/api", articleRoutes);
  }

  async listen() {
    this.app.listen(this.app.get("port"));
    console.log("Server on port", this.app.get("port"));
  }
}
