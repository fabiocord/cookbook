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
let ReceipInstruction = class ReceipInstruction {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ReceipInstruction.prototype, "id", void 0);
__decorate([
    typeorm_1.Generated(),
    __metadata("design:type", Number)
], ReceipInstruction.prototype, "step", void 0);
__decorate([
    typeorm_1.Column({ length: 500 }),
    __metadata("design:type", String)
], ReceipInstruction.prototype, "instruction", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Recipe_1.Recipe, recipe => recipe.recipeInstructions),
    __metadata("design:type", Recipe_1.Recipe)
], ReceipInstruction.prototype, "recipe", void 0);
ReceipInstruction = __decorate([
    typeorm_1.Entity()
], ReceipInstruction);
exports.ReceipInstruction = ReceipInstruction;
//# sourceMappingURL=RecipeInstruction.js.map