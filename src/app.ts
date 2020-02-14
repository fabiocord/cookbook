import "reflect-metadata";
import {useExpressServer, useContainer as rtUsec} from "routing-controllers";
import {Container} from "typedi";
import * as express from "express";
import morgan = require("morgan");
import {readdirSync, readFileSync} from "fs";
import {load as loadYAML} from "js-yaml";
import serveStatic = require("serve-static");
import {join} from "path";
import {getConnectionManager, useContainer as ormUsec} from "typeorm";
import bodyParser = require("body-parser");

/**
 * Provide a configuration injectable.
 */
const cfg = loadYAML(readFileSync('./resources/config.yml').toString());


Container.provide([{ id: 'config', value: cfg }]);

/**
 * Setup routing-controllers to use typedi container.
 */
rtUsec(Container);
ormUsec(Container);

/**
 * We create a new express server instance.
 */
const app: express.Express = express();

/**
 * Use middlewares
 */
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

useExpressServer(app, {
    /**
     * We can add options about how routing-controllers should configure itself.
     * Here we specify what controllers should be registered in our express server.
     */
    controllers: [join(__dirname, '/controllers/web/**/*'), join(__dirname, '/controllers/api/**/*') ]
});

/**
 * Import services
 */
readdirSync(join(__dirname, '/services'))
    .filter(file => file.endsWith('.js'))
    .forEach((file) => require(join(__dirname, '/services', file)));

/**
 * Import entities
 */
cfg.database.entities = [];
readdirSync(join(__dirname, '/model'))
    .filter(file => file.endsWith('.js'))
    .forEach((file) => {
        const exported = require(join(__dirname, '/model', file));
        Object.keys(exported).forEach(className => {
            cfg.database.entities.push(exported[className]);
        });
    });

/**
 * This creates the default connection using config.yml
 */
getConnectionManager().create(cfg.database).connect().then(() => {
    console.log('Connected!');
});

/**
 * Configure the view engine.
 */
app.set('view engine', 'twig');
app.set('views', join(__dirname, '/../resources/views'));

/**
 * Setup static file serving & logging
 */
app.use(serveStatic('static'));
app.use(morgan('combined'));

/**
 * Start the express app.
 */
app.listen(cfg.host.port);

console.log(`Server is up and running at port ${cfg.host.port}`);
