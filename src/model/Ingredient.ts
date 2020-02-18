import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Unit } from './Unit';
import { RecipeIngredient } from './RecipeIngredient';

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
    
    @OneToMany(
        type => RecipeIngredient,
        recipeIngredient => recipeIngredient.recipe,
        {cascadeInsert: true, cascadeUpdate : true}
    ) 
    public recipeIngredients: RecipeIngredient[];

    @ManyToOne(type => Unit, unit => unit.ingredients)
    unit : Unit;

}
