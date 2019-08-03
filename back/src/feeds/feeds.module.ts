import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feed } from './feeds.entity';
import { FeedService } from './feeds.service';
import { FeedsResolver } from './feeds.resolver';
import { UsersModule } from '../users/users.module';

@Module({
    imports: [TypeOrmModule.forFeature([Feed]), UsersModule],
    providers: [FeedService, FeedsResolver],
    exports: [FeedService],
})
export class FeedsModule { }
