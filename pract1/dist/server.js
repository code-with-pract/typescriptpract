"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
// app.use(express.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
const port = 4000;
app.get("/:id", (req, res) => {
    res.send({
        message: "This is Hello world's",
        data: req.params.id,
    });
});
app.get("/id/:id/Name/:name", (req, res) => {
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
