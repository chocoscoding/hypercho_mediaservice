import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/Mongodb";
import logg from "./Logs/Customlog";
import { VideoRouter, ChannelRouter, CommentRouter } from "./Routes";

dotenv.config();
const PORT: number | string = process.env.PORT || 9980;
const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Welcome to the media service</h1>");
});
// app.use("/Video", VideoRouter);
// app.use("/Channel", );
// app.use("/Comments", );

const start = async () => {
  const MONGO_URI: any = process.env.MONGO_URI;
  try {
    await connectDB(MONGO_URI);
    app.listen(PORT, () => logg.info(`Running on http://localhost:${PORT} ⚡`));
  } catch (error) {
    logg.fatal(error);
  }
};

start();
