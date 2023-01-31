import { createWriteStream } from "fs";
import http from "http";
import stream from "stream";
import express from "express";
 import {exec} from "child_process";
import { stdout } from "process";
import path from "path";

const app = express();

app
  .get("/", (req, res) => {
    const stream = createWriteStream("logs.js");
    req.pipe(stream);
    req.on("end", () => {
      const runner = exec(
        "node " + path.resolve() + "/logs.js",
        (...logger) => {

          res.json(logger[1]);
        }
      );
      console.log(runner);
    });
  })
  .listen(1234, () => console.log("Running on http://localhost:1234"));
