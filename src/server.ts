import { Logger } from './libs/logger';
import { banner } from './libs/banner';

import expressLoader from "./loaders/express.loader";

const log = new Logger(__filename);

async function initServer() {
    //logging with winston

    //Database with mongoose

    //express
    const app = expressLoader();
}

initServer()
    .then(() => banner(log))
    .catch(error => log.error('Application is crashed: ' + error));
