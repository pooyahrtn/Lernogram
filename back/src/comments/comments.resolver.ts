import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Comment } from './comments.entity';
import { CommentsService } from './comments.service';
import { AddComentInput } from './dto/add-comment.input';

@Resolver(of => Comment)
export class CommentsResolver {
    constructor(
        private readonly commentService: CommentsService,
    ) { }

    @Query(returns => [Comment], { name: 'feedComments' })
    async getFeedComments(@Args('feedId') feedId: string): Promise<Comment[]> {
        return await this.commentService.getFeedComments(feedId);
    }

    @Mutation(returns => Comment)
    async addComment(@Args('addCommentInput') addCommentInput: AddComentInput) {
        return await this.commentService.addComment(addCommentInput);
    }
}
