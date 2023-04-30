import { v4 as uuidv4 } from 'uuid';
import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity("specifications")
class Specification {
    @PrimaryColumn({ type: 'uuid' })
    id?: string;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar' })
    description: string;    

    @CreateDateColumn({ type: 'date' })
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Specification };