import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import TodoController from './controllers/todo.controller'
import TodoClass from './dto/TodoClass';
import TodoService from './services/todo.service'

const DATABASE_CONFIG: TypeOrmModuleOptions = {
      type: 'postgres',
      host: 'db',
      port: 9000,
      username: 'jaijuni',
      password: 'jjbatera4',
      database: 'todo-app',
      entities: [TodoClass],
      synchronize: true,
    }

@Module({
  imports: [
    TypeOrmModule.forRoot(DATABASE_CONFIG),
    TypeOrmModule.forFeature([TodoClass])
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
