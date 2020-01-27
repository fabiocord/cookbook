import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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

    @Column()
    public unity: number;

    @Column({length: 255})
    public image: string;

}
