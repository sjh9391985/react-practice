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
    .on('error', function(error){
        if(error.syscall != 'listen'){
            throw error;
        }
        switch(error.code){
            case 'EACCESS':
                console.error(`Port: ${port} requires privileges`); //port를 열지 못햇을때
                process.exit(1); // 1번은 비정상종료
                break;
            case 'EADDRINUSE' :
                console.error(`Port: ${port} is already in use`); //port를 이미 사용하고 있을때
                process.exit(1); 
                break;
            default:
                throw error;
        }
    })
    .listen(port);
