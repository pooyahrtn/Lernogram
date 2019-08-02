import { UserService } from './users.service';
import { User } from './users.entity';
import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { NewUserInput } from './dto/new-user.input';

@Resolver(of => User)
export class UserResolver {
    constructor(private readonly userService: UserService) { }

    @Query(returns => [User])
    async users(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Mutation(returns => User)
    async addUser(
        @Args('newUserData') newUserData: NewUserInput,
    ): Promise<User> {
        return await this.userService.create(newUserData);
    }
}
