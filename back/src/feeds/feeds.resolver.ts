import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Feed } from './feeds.entity';
import { FeedService } from './feeds.service';
import { NewFeedInput } from './dto/new-feed.input';

@Resolver(of => Feed)
export class FeedsResolver {
    constructor(private readonly feedService: FeedService) { }

    @Query(returns => [Feed], { name: 'feeds' })
    async getFeeds(): Promise<Feed[]> {
        return await this.feedService.findAll();
    }

    @Mutation(returns => Feed)
    async addFeed(@Args('newFeedInput') newFeedInput: NewFeedInput): Promise<Feed> {
        return this.feedService.createFeed(newFeedInput);
    }
}
