import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { Feed } from '../feeds/feeds.entity';
import { User } from '../users/users.entity';

export const COMMENNT_MAX_LENGTH = 400;
@ObjectType()
@Entity()
export class Comment {
    @Field(type => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field(type => Feed, { nullable: false })
    @ManyToOne(type => Feed, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn()
    feed: Feed;

    @Field(type => User, { nullable: false })
    @ManyToOne(type => User, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn()
    user: User;

    @Field()
    @Column({ length: COMMENNT_MAX_LENGTH })
    comment: string;
}
