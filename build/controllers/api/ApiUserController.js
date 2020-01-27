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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const UserService_1 = require("../../services/UserService");
const ResourceProvider_1 = require("../../services/ResourceProvider");
const User_1 = require("../../model/User");
const typeorm_routing_controllers_extensions_1 = require("typeorm-routing-controllers-extensions");
/**
 * RESTy API controller
 * Resource: User
 * @TODO: Add resource management for HATEOAS
 * @TODO: Add error handling
 * @TODO: Add content negotiation
 */
let ApiUserController = class ApiUserController {
    /**
     * Get resource: One User
     * @param {User} user
     * @returns {Promise<any>}
     */
    getOneUserAction(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                links: [
                    this.resources.getResource('self', '/api/users', user.id)
                ],
                content: user
            };
        });
    }
    /**
     * Get resource: User
     * @returns {Promise<any>}
     */
    getUsersAction() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.users.getAll();
            const data = users.map(user => {
                return {
                    content: { id: user.id },
                    links: [
                        this.resources.getResource('self', '/api/users/', user.id)
                    ]
                };
            });
            return {
                links: [this.resources.getResource('self', '/api/users')],
                content: data
            };
        });
    }
    /**
     * Modify resource: User
     * @param {User} user
     * @param body
     * @returns {Promise<any>}
     */
    updateUserAction(user, body) {
        return __awaiter(this, void 0, void 0, function* () {
            if (body.name) {
                user.name = body.name;
            }
            if (body.token) {
                user.token = body.token;
            }
            yield this.users.persist(user);
            return {
                links: [this.resources.getResource('self', '/api/users', user.id)],
                content: user
            };
        });
    }
    /**
     * Insert resource: One User
     * @param {string} name
     * @param {string} token
     * @returns {Promise<any>}
     */
    creteUserAction(name, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new User_1.User();
            user.token = token;
            user.name = name;
            yield this.users.persist(user);
            return {
                links: [this.resources.getResource('self', '/api/users')],
                content: user
            };
        });
    }
    /**
     * Deletes a resource: One User
     * @param {User} user
     * @returns {Promise<any>}
     */
    deleteUserAction(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = this.users.remove(user);
            return {
                links: [this.resources.getResource('self', '/api/users', user.id)],
                content: result
            };
        });
    }
};
__decorate([
    typedi_1.Inject(),
    __metadata("design:type", UserService_1.UserService)
], ApiUserController.prototype, "users", void 0);
__decorate([
    typedi_1.Inject(),
    __metadata("design:type", ResourceProvider_1.ResourceProvider)
], ApiUserController.prototype, "resources", void 0);
__decorate([
    routing_controllers_1.Get('/:id'),
    __param(0, typeorm_routing_controllers_extensions_1.EntityFromParam('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User]),
    __metadata("design:returntype", Promise)
], ApiUserController.prototype, "getOneUserAction", null);
__decorate([
    routing_controllers_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiUserController.prototype, "getUsersAction", null);
__decorate([
    routing_controllers_1.Put('/:id'),
    __param(0, typeorm_routing_controllers_extensions_1.EntityFromParam('id')), __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object]),
    __metadata("design:returntype", Promise)
], ApiUserController.prototype, "updateUserAction", null);
__decorate([
    routing_controllers_1.Post('/'),
    __param(0, routing_controllers_1.BodyParam('name')), __param(1, routing_controllers_1.BodyParam('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ApiUserController.prototype, "creteUserAction", null);
__decorate([
    routing_controllers_1.Delete('/:id'),
    __param(0, typeorm_routing_controllers_extensions_1.EntityFromParam('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User]),
    __metadata("design:returntype", Promise)
], ApiUserController.prototype, "deleteUserAction", null);
ApiUserController = __decorate([
    routing_controllers_1.JsonController('/api/users')
], ApiUserController);
exports.ApiUserController = ApiUserController;
//# sourceMappingURL=ApiUserController.js.map