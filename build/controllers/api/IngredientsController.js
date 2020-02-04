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
const IngredientService_1 = require("../../services/IngredientService");
const typeorm_routing_controllers_extensions_1 = require("typeorm-routing-controllers-extensions");
const Ingredient_1 = require("../../model/Ingredient");
let ApiIngredientController = class ApiIngredientController {
    getOneIngredientAction(ingredient) {
        return __awaiter(this, void 0, void 0, function* () {
            return ingredient;
        });
    }
    getIngredientsAction() {
        return __awaiter(this, void 0, void 0, function* () {
            const ingredients = yield this.ingredients.getAll();
            const data = ingredients.map(ingredient => {
                return { lista: [ingredient] };
            });
            return data;
        });
    }
};
__decorate([
    typedi_1.Inject(),
    __metadata("design:type", IngredientService_1.IngredientService)
], ApiIngredientController.prototype, "ingredients", void 0);
__decorate([
    routing_controllers_1.Get('/:id'),
    __param(0, typeorm_routing_controllers_extensions_1.EntityFromParam('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Ingredient_1.Ingredient]),
    __metadata("design:returntype", Promise)
], ApiIngredientController.prototype, "getOneIngredientAction", null);
__decorate([
    routing_controllers_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiIngredientController.prototype, "getIngredientsAction", null);
ApiIngredientController = __decorate([
    routing_controllers_1.JsonController('/api/ingredients')
], ApiIngredientController);
exports.ApiIngredientController = ApiIngredientController;
//# sourceMappingURL=IngredientsController.js.map