import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity()
export default class Todo {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column()
    status: TodoStatuses;

    constructor(title: string, description: string, status: TodoStatuses) {
        this.title = title;
        this.description = description;
        this.status = status;
    }
}

export enum TodoStatuses {
    ACTIVE="active",
    DISABLED="deactivated",
}