import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { User } from '../users/users.entity';

export const IMAGE_MAX_LENGTH = 200;
export const CAPTION_MAX_LENGTH = 200;
@ObjectType()
@Entity()
export class Feed {
    @Field(type => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field(type => User, { nullable: false })
    @ManyToOne(type => User, { onDelete: 'CASCADE', nullable: false, eager: true })
    @JoinColumn()
    user: User;

    @Field()
    @Column({ length: IMAGE_MAX_LENGTH, nullable: false })
    image: string;

    @Field()
    @Column({ length: CAPTION_MAX_LENGTH, nullable: false })
    caption: string;
}
