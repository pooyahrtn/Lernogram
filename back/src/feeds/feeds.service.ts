import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feed } from './feeds.entity';

@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(Feed)
        private readonly feedRepository: Repository<Feed>,
    ) { }

    findAll(): Promise<Feed[]> {
        return this.feedRepository.find();
    }
}
