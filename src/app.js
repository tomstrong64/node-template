import ExampleRouter from './routes/example.router.js';

import express from 'express';

const app = express();

app.use('/example', ExampleRouter);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});