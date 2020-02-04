import {Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import { RecipeIngredient } from "./RecipeIngredient";
import { Unit } from './Unit';

/**
 * Sample ORM entity
 */
@Entity()
export class Ingredient {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({length: 100})
    public name: string;

    @Column()
    public description: string;

    @Column({length: 255})
    public image: string;

    @OneToMany(type => RecipeIngredient, recipeIngredient => recipeIngredient.ingredient) // note: we will create author property in the Photo class below
    recipeIngredients: RecipeIngredient[];

    @ManyToOne(type => Unit, unit => unit.ingredients)
    unit : Unit;

}
