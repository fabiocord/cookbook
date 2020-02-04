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
const typeorm_1 = require("typeorm");
const Recipe_1 = require("./Recipe");
const Ingredient_1 = require("./Ingredient");
const Unit_1 = require("./Unit");
/**
 * Sample ORM entity
 */
let RecipeIngredient = class RecipeIngredient {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], RecipeIngredient.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Recipe_1.Recipe, recipe => recipe.recipeIngredients),
    __metadata("design:type", Recipe_1.Recipe)
], RecipeIngredient.prototype, "recipe", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Ingredient_1.Ingredient, ingredient => ingredient.recipeIngredients),
    __metadata("design:type", Ingredient_1.Ingredient)
], RecipeIngredient.prototype, "ingredient", void 0);
__decorate([
    typeorm_1.Column("decimal", { precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], RecipeIngredient.prototype, "quantity", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Unit_1.Unit, unit => unit.recipeIngredients),
    __metadata("design:type", Unit_1.Unit)
], RecipeIngredient.prototype, "unit", void 0);
RecipeIngredient = __decorate([
    typeorm_1.Entity()
], RecipeIngredient);
exports.RecipeIngredient = RecipeIngredient;
//# sourceMappingURL=RecipeIngredient.js.map