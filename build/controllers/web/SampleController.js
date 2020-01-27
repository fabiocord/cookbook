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
const typedi_1 = require("typedi");
const routing_controllers_1 = require("routing-controllers");
const UserService_1 = require("../../services/UserService");
const User_1 = require("../../model/User");
const crypto = require("crypto");
/**
 * Sample web controller.
 */
let SampleController = class SampleController {
    constructor(config) {
        this.config = config;
    }
    /**
     * Generate sample content if nothing provided.
     * @returns {Promise<void>}
     */
    checkUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.users.getAll();
            if (!users.length) {
                const sample = [
                    'A Simple user',
                    'Another kind of user',
                    'Mah user',
                    'm8s',
                    'Hello World'
                ];
                for (const name of sample) {
                    const user = new User_1.User();
                    user.name = name;
                    user.token = crypto.createHash('sha512').update(name).digest('hex');
                    yield this.users.persist(user);
                }
            }
        });
    }
    /**
     * Sample index action.
     * @returns {any}
     */
    indexAction() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.checkUsers();
            const users = yield this.users.getAll();
            return {
                port: this.config.host.port,
                title: this.config.sample.title,
                users: users
            };
        });
    }
};
__decorate([
    typedi_1.Inject(),
    __metadata("design:type", UserService_1.UserService)
], SampleController.prototype, "users", void 0);
__decorate([
    routing_controllers_1.Render('index'),
    routing_controllers_1.Get('/'),
    routing_controllers_1.HttpCode(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SampleController.prototype, "indexAction", null);
SampleController = __decorate([
    routing_controllers_1.Controller(),
    __param(0, typedi_1.Inject('config')),
    __metadata("design:paramtypes", [Object])
], SampleController);
exports.SampleController = SampleController;
//# sourceMappingURL=SampleController.js.map