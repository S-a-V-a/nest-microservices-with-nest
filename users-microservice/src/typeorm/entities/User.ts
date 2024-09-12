import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Payment} from "./Payment";
import {JoinColumn} from "typeorm/browser";

@Entity({ name: 'users'})
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false})
    username: string;

    @Column({ nullable: false})
    email: string;

    @Column({ nullable: true})
    displayName?: string

    @OneToMany(() => Payment, (payment) => payment.user)
    @JoinColumn()
    payments: Payment[]
}