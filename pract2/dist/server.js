"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mysql_1 = __importDefault(require("mysql"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
const dbConnect = mysql_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tnplab",
});
dbConnect.connect((err) => {
    if (err) {
        console.log(err.sqlMessage);
    }
    console.log("tnpLab database is connected");
});
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sqlQuery = `SELECT * FROM user`;
    yield dbConnect.query(sqlQuery, (err, result) => {
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
}));
app.get("/getalluser", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sqlQuery = `CALL getuser()`;
    yield dbConnect.query(sqlQuery, (err, result) => {
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
}));
app.get("/getsingleuser/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const sqlQuery = `CALL getsingleuser(?)`;
        yield dbConnect.query(sqlQuery, [id], (err, result) => {
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}));
app.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sqlQuery = "CALL registeruser(?, ?, ?, ?)";
        const values = [
            req.body.fullname,
            req.body.phone_no,
            req.body.password,
            req.body.email,
        ];
        dbConnect.query(sqlQuery, values, (err, result) => {
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}));
app.put("/update/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const sqlQuery = "CALL updateuser(?, ?, ?, ?, ?)";
        const values = [
            req.body.fullname,
            req.body.phone_no,
            req.body.password,
            req.body.email,
        ];
        yield dbConnect.query(sqlQuery, [id, ...values], (err, result) => {
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}));
app.post("/post/id/:id/Name/:name", (req, res) => {
    res.send({
        data: req.body,
        params: {
            id: req.body.id,
            name: req.params.name,
        },
    });
});
app.delete("/deleteuser/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const sqlQuery = "CALL deleteuser(?)";
        yield dbConnect.query(sqlQuery, [id], (err, result) => {
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}));
app.listen(process.env.PORT, () => {
    console.log(`server is started on port http://localhost:${process.env.PORT}`);
});
