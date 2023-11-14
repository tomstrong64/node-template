import { createServer } from 'http';
import app from '../app.js';

const server = createServer(app);

// TODO: setup database connections, etc.

server.listen(3000);

// graceful shutdown
process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated');
    });

    // TODO: close database connections, etc.
});
