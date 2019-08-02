import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feed } from './feeds.entity';
import { FeedService } from './feeds.service';
import { FeedsResolver } from './feeds.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Feed])],
    providers: [FeedService, FeedsResolver],
})
export class FeedsModule { }
