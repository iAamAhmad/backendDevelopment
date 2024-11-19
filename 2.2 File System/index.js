const fs = require("fs");

// fs.writeFile("message.txt", "Hello i am being created", (err) => {
//   if(err) throw err;
//   console.log("The File Has been Saved")
// })

fs.readFile("./message.txt", 'utf8', (err, data) => {
  if(err) throw err;
  console.log(data)
})