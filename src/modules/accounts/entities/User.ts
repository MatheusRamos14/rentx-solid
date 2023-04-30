import { v4 as uuidv4 } from "uuid";
import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm";

@Entity("users")
class User {
    @PrimaryColumn({ type: 'uuid' })
    id?: string;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'varchar' })
    email: string;

    @Column({ type: 'varchar' })
    driver_license: string;

    @Column({ type: 'boolean' })
    admin: boolean;

    @CreateDateColumn({ type: 'date' })
    created_at: Date;

    constructor() { 
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { User };