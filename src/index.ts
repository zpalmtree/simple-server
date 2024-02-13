import express from 'express';

import { logger } from './Logger.js';

const app = express();
const port = 1736;

const sizeInBytes = 10 * 1024 * 1024; // 10MB
const buffer = Buffer.alloc(sizeInBytes, '0');
const largeString = buffer.toString();

app.get('/', (req, res) => {
    res.send({
        time: new Date().toISOString(),
    });
});

app.post('/', (req, res) => {
    res.send({
        time: new Date().toISOString(),
    });
});

app.post('/data', (req, res) => {
    res.send({
        time: new Date().toISOString(),
        data: largeString,
    });
});

async function main() {
    app.listen(port, () => {
        logger.info('Server started');
    });
}

main();
