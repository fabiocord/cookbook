import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
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

    @ManyToOne(type => Unit, unit => unit.ingredients)
    unit : Unit;

}
