import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comments.entity';
import { Repository } from 'typeorm';
import { FeedService } from '../feeds/feeds.service';
import { UserService } from '../users/users.service';
import { AddComentInput } from './dto/add-comment.input';

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentRepository: Repository<Comment>,
        private readonly feedService: FeedService,
        private readonly userService: UserService,
    ) { }

    async getFeedComments(feedId: string): Promise<Comment[]> {
        const feed = await this.feedService.findOneById(feedId);
        if (!feed) {
            throw new NotFoundException();
        }
        return await this.commentRepository.find({
            where: [
                {
                    feed,
                },
            ],
            relations: ['user'],
        });
    }

    async addComment(data: AddComentInput): Promise<Comment> {
        const {
            feedId,
            userId,
            ...commentData
        } = data;
        const user = await this.userService.findById(userId);
        const feed = await this.feedService.findOneById(feedId);
        if (!user || !feed) {
            throw new NotFoundException();
        }

        const commentObject = await this.commentRepository.create({
            user,
            feed,
            ...commentData,
        });

        const comment = this.commentRepository.save(commentObject);

        // race condition and ...
        await this.feedService.updateNumberOfFeedComments(feed, feed.nComments + 1);
        return comment;
    }
}
