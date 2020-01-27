"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const path = require("path");
/**
 * Default service for the users.
 */
let ResourceProvider = class ResourceProvider {
    /**
     * Gets the given resource paths a location in the server.
     * @param {(string|number)[]} paths
     * @returns {string}
     */
    getResourceLocation(...paths) {
        const host = this.config.host;
        return `${host.protocol}://` +
            path.join(`${host.name}:${host.port}`, ...paths.map(String));
    }
    /**
     * Gets the resource link for the given relation & resource location.
     * @param {string} rel
     * @param {(string|number)[]} paths
     * @returns {ResourceLink}
     */
    getResource(rel, ...paths) {
        return {
            rel: rel,
            location: this.getResourceLocation(...paths)
        };
    }
};
__decorate([
    typedi_1.Inject('config'),
    __metadata("design:type", Object)
], ResourceProvider.prototype, "config", void 0);
ResourceProvider = __decorate([
    typedi_1.Service()
], ResourceProvider);
exports.ResourceProvider = ResourceProvider;
//# sourceMappingURL=ResourceProvider.js.map