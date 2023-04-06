import express, { Request, Response } from "express";
import cors from "cors";
import { availability } from "./data";
const app = express();
const port = 5000;

app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/availability", (req: Request, res: Response) => {
  //@ts-ignore
  const choosenMonth = parseInt(req.query.month, 10);

  console.log(typeof choosenMonth);
  const foundedAvailability = availability.filter(
    (ele) => ele.month === choosenMonth
  );
  console.log(foundedAvailability);

  res.send(foundedAvailability);
});
app.listen(port, () => {
  console.log(`Example app listening on port:  ${port}!`);
});
