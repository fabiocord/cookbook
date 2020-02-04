import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Recipe } from "./Recipe";

/**
 * Sample ORM entity
 */
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column({length: 128})
    public token: string;

    @OneToMany(type => Recipe, recipe => recipe.user)
    recipes: Recipe[];

}
