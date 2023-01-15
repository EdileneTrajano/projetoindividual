import jsonServe from 'jsonServe';
const server = jsonServe.create();
const router = jsonServe.router('db.json');
const middlewres = jsonServe.defaults();
const port = process.env.PORT || 3200;

server.use(middlewres);

server.use(router);

