const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Navigation</title>
      <style>
          .navbar li{
              float: left;
              list-style: none;
              margin: 13px 20px;
          }
          .navbar ul{
              overflow: auto;
          }
          .navbar{
              border-radius: 25px;
              background-color: black;
              margin: 21px 76px;
          }
          .navbar li a{
              color: white;
              padding: 10px 17px;
              text-decoration: none;
          }
          .search{
              float: right;
              color: wheat;
              padding: 13px 118px;
          }
          .navbar input{
              border: 3px solid black;
              border-radius: 10px;
              padding: 3px 19px;
              width: 135px;
          }
          .navbar li :hover{
              color: red;
          }
      </style>
  </head>
  <body>
      <header>
          <nav class="navbar">
              <ul>
                  <li><a href="">Home</a> </li>
                  <li><a href="">About</a> </li>
                  <li><a href="">Services</a> </li>
                  <li><a href="">Contact US</a> </li>
                  <li><a href="">Others</a> </li>
                  <div class="search">
                      <input type="text" name="search" id="search" placeholder="Search this website">
                  </div>
              </ul>
          </nav>
      </header>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});