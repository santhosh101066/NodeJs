import fs from "fs"; //file sysytem module

console.log("Async file write start");
fs.writeFile(
  "data_async.txt",
  "Hiii this text file is created by file sys module",
  (err) => {
    err && console.log(err);
    console.log("file write Async completed");
  }
);
console.log("Async file write line end");

console.log("Sync file write start");
var err = fs.writeFileSync(
  "data_sync.txt",
  "Hiii this text file is created by file sys module"
);
err && console.log(err);
console.log("file write Sync completed");

fs.writeFileSync(
    "file_manager.js",
    "//Modified my self",
    (err) => {
      err && console.log(err);
      console.log("file write Async completed");
    }
  );
// fs.appendFileSync('file_manager.js','console.log("Hii appended msg");')


fs.stat('data_async.txt',(err,stats)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(stats);
})