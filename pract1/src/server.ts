import express, { Request, Response } from "express";
import bodyParser from "body-parser";
const app = express();
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 4000;

app.get("/:id", (req: Request, res: Response) => {
  res.send({
    message: "This is Hello world's",
    data: req.params.id,
  });
});

app.get("/id/:id/Name/:name", (req: Request, res: Response) => {
  res.send({
    message: "This is Hello world's",
    id: req.params.id,
    name: req.params.name,
  });
});

app.post("/post", (req, res) => {
  res.send({
    data: req.body,
  });
});

app.post("/post/id/:id/Name/:name", (req, res) => {
  res.send({
    data: req.body,
    params: {
      id: req.body.id,
      name: req.params.name,
    },
  });
});

app.listen(port, () => {
  console.log(`server is started on port http://localhost:${port}`);
});
