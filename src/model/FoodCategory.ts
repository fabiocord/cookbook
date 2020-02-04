import {Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable} from "typeorm";
import { Recipe } from "./Recipe";

/**
 * Sample ORM entity
 */
@Entity()
export class FoodCategory {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({length: 100})
    public name: string;

    @Column()
    public description: string;

    @Column()
    public enabled: boolean = true;    

    @ManyToMany(type => Recipe, recipe => recipe.foodCategories)
    @JoinTable()
    public recipes: Recipe[];
    
}