const http = require("http");

const server = http.createServer((req, res) => {
  console.log("got it", req.method);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain");
  setTimeout(() => {
    res.write("test");
    setTimeout(() => {
      res.write("123");
      setTimeout(() => {
        console.log("ended");
        res.end("hello");
      }, 3000);
    }, 2000);
  }, 3000);
});

server.listen(3422, () => {
  console.log("Server is running.");
});
