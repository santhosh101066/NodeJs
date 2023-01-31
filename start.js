import nodemon from "nodemon";

nodemon({ script: "app.js" })
  .on("start", () => {
    console.log("Started");
  })
  .on("exit", () => {
    console.log("Process Ended");
  });
