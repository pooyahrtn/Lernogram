import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feed } from './feeds.entity';
import { NewFeedInput } from './dto/new-feed.input';
import { UserService } from '../users/users.service';

@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(Feed)
        private readonly feedRepository: Repository<Feed>,
        private readonly userReposityory: UserService,
    ) { }

    findAll(): Promise<Feed[]> {
        return this.feedRepository.find();
    }

    async createFeed(data: NewFeedInput): Promise<Feed> {
        const {
            userId,
            ...feedData
        } = data;
        const user = await this.userReposityory.findById(userId);
        if (!user) {
            throw new NotFoundException();
        }
        const feed = this.feedRepository.create({ user, ...feedData });
        return this.feedRepository.save(feed);
    }

    findOneById(id: string): Promise<Feed> {
        return this.feedRepository.findOne({ id });
    }

    async updateNumberOfFeedComments(feed: Feed, nComments) {
        return await this.feedRepository.update(feed, { nComments });
    }
}
