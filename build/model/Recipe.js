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
const FoodCategory_1 = require("./FoodCategory");
const RecipeIngredient_1 = require("./RecipeIngredient");
const RecipeInstruction_1 = require("./RecipeInstruction");
const User_1 = require("./User");
/**
 * Sample ORM entity
 */
let Recipe = class Recipe {
    /**
     * Sample ORM entity
     */
    constructor() {
        this.dataInsercao = new Date();
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Recipe.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], Recipe.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Recipe.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Recipe.prototype, "portions", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Recipe.prototype, "prepareTime", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], Recipe.prototype, "image", void 0);
__decorate([
    typeorm_1.ManyToMany(type => FoodCategory_1.FoodCategory, foodCategory => foodCategory.recipes),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Recipe.prototype, "foodCategories", void 0);
__decorate([
    typeorm_1.OneToMany(type => RecipeIngredient_1.RecipeIngredient, recipeIngredient => recipeIngredient.recipe) // note: we will create author property in the Photo class below
    ,
    __metadata("design:type", Array)
], Recipe.prototype, "recipeIngredients", void 0);
__decorate([
    typeorm_1.OneToMany(type => RecipeInstruction_1.ReceipInstruction, recipeInstruction => recipeInstruction.recipe) // note: we will create author property in the Photo class below
    ,
    __metadata("design:type", Array)
], Recipe.prototype, "recipeInstructions", void 0);
__decorate([
    typeorm_1.ManyToOne(type => User_1.User, user => user.recipes) // note: we will create author property in the Photo class below
    ,
    __metadata("design:type", User_1.User)
], Recipe.prototype, "user", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Recipe.prototype, "dataInsercao", void 0);
Recipe = __decorate([
    typeorm_1.Entity()
], Recipe);
exports.Recipe = Recipe;
//# sourceMappingURL=Recipe.js.map