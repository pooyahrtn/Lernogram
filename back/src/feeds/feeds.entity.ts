import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/users.entity';

@Entity()
export class Feed {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => User, { onDelete: 'CASCADE' })
    @JoinColumn()
    user: User;

    @Column({ length: 200 })
    image: string;
}
