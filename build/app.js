"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const express = require("express");
const morgan = require("morgan");
const fs_1 = require("fs");
const js_yaml_1 = require("js-yaml");
const serveStatic = require("serve-static");
const path_1 = require("path");
const typeorm_1 = require("typeorm");
const bodyParser = require("body-parser");
/**
 * Provide a configuration injectable.
 */
const cfg = js_yaml_1.load(fs_1.readFileSync('./resources/config.yml').toString());
typedi_1.Container.provide([{ id: 'config', value: cfg }]);
/**
 * Setup routing-controllers to use typedi container.
 */
routing_controllers_1.useContainer(typedi_1.Container);
typeorm_1.useContainer(typedi_1.Container);
/**
 * We create a new express server instance.
 */
const app = express();
/**
 * Use middlewares
 */
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
routing_controllers_1.useExpressServer(app, {
    /**
     * We can add options about how routing-controllers should configure itself.
     * Here we specify what controllers should be registered in our express server.
     */
    controllers: [path_1.join(__dirname, '/controllers/web/**/*'), path_1.join(__dirname, '/controllers/api/**/*')]
});
/**
 * Import services
 */
fs_1.readdirSync(path_1.join(__dirname, '/services'))
    .filter(file => file.endsWith('.js'))
    .forEach((file) => require(path_1.join(__dirname, '/services', file)));
/**
 * Import entities
 */
cfg.database.entities = [];
fs_1.readdirSync(path_1.join(__dirname, '/model'))
    .filter(file => file.endsWith('.js'))
    .forEach((file) => {
    const exported = require(path_1.join(__dirname, '/model', file));
    Object.keys(exported).forEach(className => {
        cfg.database.entities.push(exported[className]);
    });
});
/**
 * This creates the default connection using config.yml
 */
typeorm_1.getConnectionManager().create(cfg.database).connect().then(() => {
    console.log('Connected!');
});
/**
 * Configure the view engine.
 */
app.set('view engine', 'twig');
app.set('views', path_1.join(__dirname, '/../resources/views'));
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
//# sourceMappingURL=app.js.map