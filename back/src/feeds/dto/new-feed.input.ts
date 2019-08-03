import { MaxLength } from 'class-validator';
import { Field, InputType, ID } from 'type-graphql';
import { IMAGE_MAX_LENGTH, CAPTION_MAX_LENGTH } from '../feeds.entity';

@InputType()
export class NewFeedInput {
    @Field()
    @MaxLength(IMAGE_MAX_LENGTH)
    image: string;

    @Field(type => ID)
    userId: string;

    @Field()
    @MaxLength(CAPTION_MAX_LENGTH)
    caption: string;
}
