const server = require("ws").Server;
const s = new server({ port: 5001 });

s.on("connection", ws => {
    ws.on("message", message => {
        console.log("Received: " + message);

        if (message === "hello") {
            ws.send("hello from server");
        }
    });
});

const express = require('express');
const app = express();
const port = 5080;

app.get('/', (req, res) => {
    console.log(`get /, dirname=${__dirname}`);
    res.sendFile(`${__dirname}/public/index.html`);
});
app.get('/', (req, res) => {
    console.log(`get /, dirname=${__dirname}`);
    res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});

