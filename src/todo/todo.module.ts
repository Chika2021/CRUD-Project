import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema } from './model/todo.model';

@Module({
  imports:[MongooseModule.forFeature([{name:'Todo', schema:TodoSchema}])],
  providers: [TodoService],
  controllers: [TodoController]
})
export class TodoModule {}
