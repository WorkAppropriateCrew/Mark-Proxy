const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const port = 8000;
const apiProxy = httpProxy.createProxyServer();
const Carousel = 'http://localhost:8001';
const ServerTwo = 'http://localhost:8002';
const ServerThree = 'http://localhost:8003';
const ServerFour = 'http://localhost:8004';
const ServerFive = 'http://localhost:8005';

//Carousel server functions
app.all('/getProducts/*', (req, res) => {
  console.log('Redirecting to Carousel at localhost:8001');
  apiProxy.web(req, res, { target: Carousel });
});

app.all('/app2/*', (req, res) => {
  console.log('redirecting to Server2');
  apiProxy.web(req, res, { target: ServerTwo });
});

app.all('/app3/*', (req, res) => {
  console.log('redirecting to Server3');
  apiProxy.web(req, res, { target: ServerThree });
});

app.all('/app4/*', (req, res) => {
  console.log('redirecting to Server3');
  apiProxy.web(req, res, { target: ServerFour });
});

app.all('/app5/*', (req, res) => {
  console.log('redirecting to Server3');
  apiProxy.web(req, res, { target: ServerFive });
});

app.listen(port, () => {
  console.log(`Proxy Listening on port: ${port}`);
});
