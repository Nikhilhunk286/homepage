
const fs=require('fs');
const http = require('http');
//NOTE: First run this file after going to this folder using cd command and then  type  node L-21_create-custom-backend.js then type    127.0.0.1:3000 in chrome window.
const hostname = '127.0.0.1';
const port = process.env.PORT||3000;
const home=fs.readFileSync('./index.html');//Using ./ means we are inside the current folder.
const about=fs.readFileSync('./about.html');
const services=fs.readFileSync('./services.html');   
const contact=fs.readFileSync('./contact.html');
const server = http.createServer((req, res) => {
    console.log(req.url);//It  is a string containing the currently requested URL path.It will print the content which wil hit in url string , it can be / ,favicon.ico anything .If we do 127.0.0.1/contact then as contact become a part of req. url, then it will also print contact.
url=req.url;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  //Here  url '/' means any  html file, then go  for home which means open index.html and as we go  there  then it contains home,about services,contact and those text inside them have links which are connected to html files, so all are connected and our custom backend  is ready.
  if((url=='/'))//It means by default if url  encounteres '/' in url=req.url then open  index.html file which is under home obj. and file will be opened using res.end(home);Don't think how url will encounter it actually as we run this code as url will be gen. and in that url we will have / and other  char., so automatically it will run this if condition.
  {
    res.end(home);
  }
else if(url=='/about')//This url is already connected in index.html ,same for all.
{
    res.end(about);
}
else if(url=='/services')
{
    res.end(services);
}
else if(url=='/contact')
{
    res.end(contact);
} 
else
{
    res.statusCode=404;
    res.removeHeader("<h1>404 error not found</h1>");
}
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});