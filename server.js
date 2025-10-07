import http from 'http';
import url from 'url';
import fs from 'fs/promises';
import path from 'path';


const PORT = process.env.PORT || 3000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//console.log(__filename, __dirname);

let filepath;

const server = http.createServer(async (req, res) => {
  try {
    switch(req.url) {
      case '/':
        filepath = path.join(__dirname, 'public', 'index.html');
        break;
      case '/about':
        filepath = path.join(__dirname, 'public', 'about.html');
        break;
      case '/contact-me':
        filepath = path.join(__dirname, 'public', 'contact-me.html');
        break;
      default:
        res.statusCode = 404;
        filepath = path.join(__dirname, 'public', '404.html');
        break;
    }
    const data = await fs.readFile(filepath);
    res.setHeader( 'Content-Type', 'text/html');
    res.end(data);

  } catch (error) {
    console.error(err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Method not allowed');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
