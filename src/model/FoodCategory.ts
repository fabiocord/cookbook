import {Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable} from "typeorm";

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
 
}