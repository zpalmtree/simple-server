import express from 'express';

import { logger } from './Logger.js';

const app = express();
const port = 1736;

app.get('/', (req, res) => {
    res.send({
        time: new Date().toISOString(),
    });
});

async function main() {
    app.listen(port, () => {
        logger.info('Server started');
    });
}

main();
