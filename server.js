const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  // set header content type
  res.setHeader("Content-Type", "text/html");

  // routing
  let path = "./client/";

  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about/index.html";
      break;
    case "/blog":
      path += "blog/index.html";
      break;
    case "/contact":
      path += "contact/index.html";
      break;
    default:
      path += "/404.html";
      res.statusCode = 404;
  }

  // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });
});

// localhost is the default value for 2nd argument
server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});

// const http = require("http");
// const server = http.createServer();
// server.on("request", (req, response) => {
//   console.log("A request has been submitted");
//   console.log(req);
// });

// // The port listener
// server.listen(3000, () => {
//   console.log("Server started on http://127.0.0.1:3000");
// });
