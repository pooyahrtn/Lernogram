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
        const res = await this.commentRepository.find({
            where: [
                {
                    feed,
                },
            ],
        });
        console.log(res);
        return res;
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

        const comment = await this.commentRepository.create({
            user,
            feed,
            ...commentData,
        });

        return this.commentRepository.save(comment);
    }
}
