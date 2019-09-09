import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Food {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length : 60})
    name: string;

    @Column({length: 60})
    type: string;

    @Column({length: 1000})
    desc: string;

    @Column()
    price: number;

    @Column({length: 1000})
    img_url: string;

    @Column()
    qty: number;
}