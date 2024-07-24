const jsonServer  = require('json-server');
const server  = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();

server.use(middleware);


server.use((req, res, next) => {
    console.log("request received");
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS,PATCH');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept Content-Type, Authorization');
    next();
});

// router.get("/:id", (req, res, next) => {
//   const { id } = req.params;
//   const data = require(`./db/${id}.json`);
//   res.json(data);
// });

server.use(router);

server.listen(3001, () => {
  console.log("JSON Server is running");
});