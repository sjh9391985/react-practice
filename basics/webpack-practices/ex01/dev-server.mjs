import http from 'http';
import express from 'express'; 
import * as path from 'path';

const port = 8080;

// Application Setup
const application = express()
    // 1. static serve(체인걸음)
    .use(express.static(path.join(path.resolve('.'), "public")));

// server setup
http.createServer(application)
    .on('listening', function(){
        console.info(`Http Server running on port ${port}`);
    })
    .listen(port);
