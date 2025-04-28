import http from "http";
import capitalize from "capitalize";
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.writeHead(300, { "Content-type": "text/html" });
    res.write("<head> <title> hello world</title></head> ");
    res.write("<body>");
    res.write(capitalize.words("hello world for nodejs world !"));
    res.write("</body>");
    res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.write("</html>");
    res.write("<head> <title> Users</title></head>");
    res.write("<body>");
    res.write("<h1> Welcome For Our User</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  }
});
server.listen(8080);
