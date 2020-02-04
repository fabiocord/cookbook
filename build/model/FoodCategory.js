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
/**
 * Sample ORM entity
 */
let FoodCategory = class FoodCategory {
    /**
     * Sample ORM entity
     */
    constructor() {
        this.enabled = true;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], FoodCategory.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], FoodCategory.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FoodCategory.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], FoodCategory.prototype, "enabled", void 0);
__decorate([
    typeorm_1.ManyToMany(type => Recipe_1.Recipe, recipe => recipe.foodCategories),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], FoodCategory.prototype, "recipes", void 0);
FoodCategory = __decorate([
    typeorm_1.Entity()
], FoodCategory);
exports.FoodCategory = FoodCategory;
//# sourceMappingURL=FoodCategory.js.map