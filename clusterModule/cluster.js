const http = require('http');
const cluster = require('cluster');
const os = require('os');

const numOfCpus = os.cpus().length;

if(cluster.isMaster){
    for(let i = 0; i < numOfCpus; i++){
        cluster.fork();
    }

    cluster.on('exit',()=>{
        cluster.fork()
    })
} else {

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Hi this is from http module' }));
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'API not found' }));
    }
});

server.listen(3010, () => {
    console.log('Server started successfully on port 3010...');
});

}