import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { UserService } from './users.service';
import { UserResolver } from './users.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService, UserResolver],
})
export class UsersModule {

}
