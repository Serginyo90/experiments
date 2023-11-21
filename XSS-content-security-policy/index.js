const http = require("http");
const fs = require("fs")
const httpServer = http.createServer();
const PORT = 3000;
httpServer.on("listening", () => console.log(`Сервер слушает http://localhost:${PORT}/`));
httpServer.on("request", (req, res) => {
  // res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'");
  console.log(`_req.url: ${req.url}_`);
  if (req.url === "/") {
    res.end(fs.readFileSync("index.html"));
    return;
  }
  if (req.url === "/script.js") {
    res.end(fs.readFileSync("script.js"));
    return;
  }
})

httpServer.listen(PORT)
