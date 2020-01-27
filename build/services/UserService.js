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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../model/User");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const typedi_1 = require("typedi");
const UserRepository_1 = require("../repository/UserRepository");
/**
 * Default service for the users.
 */
let UserService = class UserService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repo.find();
        });
    }
    persist(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repo.save(user);
        });
    }
    remove(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repo.remove(user);
        });
    }
};
__decorate([
    typeorm_typedi_extensions_1.OrmRepository(User_1.User),
    __metadata("design:type", UserRepository_1.UserRepository)
], UserService.prototype, "repo", void 0);
UserService = __decorate([
    typedi_1.Service()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map