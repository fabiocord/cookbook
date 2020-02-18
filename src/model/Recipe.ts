import {Column, Entity, PrimaryGeneratedColumn, JoinTable, ManyToMany, OneToMany, ManyToOne} from "typeorm";
import { FoodCategory } from './FoodCategory';
import { ReceipInstruction as RecipeInstruction } from "./RecipeInstruction";
import { User } from "./User";
import { RecipeIngredient } from './RecipeIngredient';

/**
 * Sample ORM entity
 */
@Entity()
export class Recipe {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({length: 100})
    public name: string;

    @Column()
    public description: string;

    @Column()
    public portions: number;
    
    @Column()
    public prepareTime: number;

    @Column({length: 255})
    public image: string;
    
    @ManyToMany(type => FoodCategory,        
        {cascadeInsert: true, cascadeUpdate : true})

    @JoinTable()
    public foodCategories: FoodCategory[];

    @OneToMany(
        type => RecipeInstruction,
        recipeInstruction => recipeInstruction.recipe,
        {cascadeInsert : true,cascadeUpdate: true}
    ) // note: we will create author property in the Photo class below

    public recipeInstructions: RecipeInstruction[];

    @OneToMany(
        type => RecipeIngredient,
        recipeIngredient => recipeIngredient.recipe,
        {cascadeInsert: true, cascadeUpdate : true}
    ) // note: we will create author property in the Photo class below
    public recipeIngredients: RecipeIngredient[];


    @ManyToOne(type => User, user => user.recipes) // note: we will create author property in the Photo class below
    user: User;

    @Column()
    public dataInsercao: Date = new Date();
    
    



}
