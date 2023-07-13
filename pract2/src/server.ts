import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dbConnect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tnplab",
});

dbConnect.connect((err: any) => {
  if (err) {
    console.log(err.sqlMessage);
  }
  console.log("tnpLab database is connected");
});

app.get("/", async (req: Request, res: Response) => {
  const sqlQuery = `SELECT * FROM user`;
  await dbConnect.query(sqlQuery, (err: any, result: any) => {
    if (err) {
      return res.status(404).json({
        message: "Data not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "All user data",
      result,
    });
  });
});

app.get("/getalluser", async (req: Request, res: Response) => {
  const sqlQuery = `CALL getuser()`;
  await dbConnect.query(sqlQuery, (err: any, result: any) => {
    if (err) {
      return res.status(404).json({
        message: "Data not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "All user data",
      result,
    });
  });
});

app.get("/getsingleuser/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const sqlQuery = `CALL getsingleuser(?)`;
    await dbConnect.query(sqlQuery, [id], (err: any, result: any) => {
      if (err) {
        return res.status(404).json({
          message: "Data not found",
        });
      }
      res.status(200).json({
        success: true,
        message: "All user data",
        result,
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

app.post("/register", async (req: Request, res: Response) => {
  try {
    const sqlQuery = "CALL registeruser(?, ?, ?, ?)";
    const values = [
      req.body.fullname,
      req.body.phone_no,
      req.body.password,
      req.body.email,
    ];

    dbConnect.query(sqlQuery, values, (err: any, result: any) => {
      console.log(result, "result");
      if (err) {
        console.error("Error executing stored procedure:", err);
        return res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
      res.status(201).json({
        success: true,
        message: "User registered successfully",
        result,
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

app.put("/update/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const sqlQuery = "CALL updateuser(?, ?, ?, ?, ?)";
    const values = [
      req.body.fullname,
      req.body.phone_no,
      req.body.password,
      req.body.email,
    ];

    await dbConnect.query(
      sqlQuery,
      [id, ...values],
      (err: any, result: any) => {
        console.log(result, "result");
        if (err) {
          console.error("Error executing stored procedure:", err);
          return res.status(500).json({
            success: false,
            message: "Internal server error",
          });
        }
        res.status(201).json({
          success: true,
          message: "User updated successfully",
          result,
        });
      }
    );
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
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

app.delete("/deleteuser/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const sqlQuery = "CALL deleteuser(?)";
    await dbConnect.query(sqlQuery, [id], (err: any, result: any) => {
      console.log(result, "result");
      if (err) {
        console.error("Error executing stored procedure:", err);
        return res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
      res.status(201).json({
        success: true,
        message: "User updated successfully",
        result,
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`server is started on port http://localhost:${process.env.PORT}`);
});
