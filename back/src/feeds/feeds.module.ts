import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feed } from './feeds.entity';
import { FeedService } from './feeds.service';

@Module({
    imports: [TypeOrmModule.forFeature([Feed])],
    providers: [FeedService],
})
export class FeedsModule { }
