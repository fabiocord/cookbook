import {Column, Entity, PrimaryGeneratedColumn, OneToMany, Generated, ManyToOne} from "typeorm";
import { Recipe } from "./Recipe";

/**
 * Sample ORM entity
 */
@Entity()
export class ReceipInstruction {

    @PrimaryGeneratedColumn()
    public id: number;

    @Generated()
    public step: number;

    @Column({length: 500})
    public instruction: string;

    @ManyToOne(type => Recipe, recipe => recipe.recipeInstructions)
    recipe: Recipe;

}
