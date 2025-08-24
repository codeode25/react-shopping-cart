const jsonServer = require("json-server");
const server = jsonServer.create();

const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults({cors: true})

server.use(router);
server.use(middleware);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`JSON server is running on http://localhost/${PORT}`);
})