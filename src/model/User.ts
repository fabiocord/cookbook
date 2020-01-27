import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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

}
