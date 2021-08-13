import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity() //sql table ==='coffee' 괄호안에 이름넣으면 그 이름으로 테이블생성
export class Coffee{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name: string;
    @Column()
    brand: string;
    @Column('json', {nullable:true})
    flavors: string[];
}