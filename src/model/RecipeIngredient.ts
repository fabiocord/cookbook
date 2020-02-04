import {Column, Entity, PrimaryGeneratedColumn, JoinTable, ManyToMany, ManyToOne} from "typeorm";
import { Recipe } from './Recipe';
import { Ingredient } from "./Ingredient";
import { Unit } from './Unit';

/**
 * Sample ORM entity
 */
@Entity()
export class RecipeIngredient {

    @PrimaryGeneratedColumn()
    public id: number;
    
    @ManyToOne(type => Recipe, recipe => recipe.recipeIngredients)
    recipe: Recipe;
     
    @ManyToOne(type => Ingredient, ingredient => ingredient.recipeIngredients)
    ingredient: Ingredient;

    @Column("decimal", { precision: 5, scale: 2 })
    public quantity: number;

    @ManyToOne(type => Unit, unit => unit.recipeIngredients)
    unit : Unit;
}
