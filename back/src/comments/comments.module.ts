import { Module } from '@nestjs/common';
import { CommentsResolver } from './comments.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsService } from './comments.service';
import { UsersModule } from '../users/users.module';
import { FeedsModule } from '../feeds/feeds.module';
import { Comment } from './comments.entity';

@Module({
  providers: [
    CommentsResolver,
    CommentsService,
  ],
  imports: [
    TypeOrmModule.forFeature([Comment]),
    FeedsModule,
    UsersModule,
  ],
})
export class CommentsModule { }
