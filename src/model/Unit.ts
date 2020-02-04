import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { RecipeIngredient } from "./RecipeIngredient";
import { Ingredient } from "./Ingredient";

/**
 * Sample ORM entity
 */
@Entity()
export class Unit {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({length: 10})
    public name: string;

    @Column()
    public description: string;

    @OneToMany(type => RecipeIngredient, recipeIngredient => recipeIngredient.unit)
    recipeIngredients: RecipeIngredient[];

    @OneToMany(type => Ingredient, ingredient => ingredient.unit)
    ingredients: Ingredient[];

}
