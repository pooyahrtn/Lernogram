import { Field, InputType, ID } from 'type-graphql';

@InputType()
export class AddComentInput {
    @Field(type => ID)
    feedId: string;

    @Field(type => ID)
    userId: string;

    @Field()
    comment: string;
}
