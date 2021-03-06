import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { FeedsModule } from './feeds/feeds.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { join } from 'path';
import { CommentsModule } from './comments/comments.module';
import * as config from './config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.POSTGRES_HOST,
      port: parseInt(config.POSTGRES_PORT, 10),
      username: config.POSTGRES_USER,
      password: config.POSTGRES_PASSWORD,
      database: config.POSTGRES_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    FeedsModule,
    UsersModule,
    CommentsModule,
  ],
})
export class AppModule { }
