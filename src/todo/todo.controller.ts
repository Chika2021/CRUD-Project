import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './model/todo.model';
import { TodoDto } from './todo.dto/create.dto';
import { UpdateDto } from './todo.dto/update.dto';
import { Query as ExpressQuery} from 'express-serve-static-core'

@Controller('todo')
export class TodoController {
    constructor(private todoService:TodoService){}

    @Get()
        async getValues(@Query() query:ExpressQuery):Promise<Todo[]> {
            return await this.todoService.findAll(query)
        }

    @Post()
        async createValues(@Body() todo:TodoDto):Promise<Todo>{
            return await this.todoService.createTodo(todo)
        }
    @Get(':id')
        async getById(@Param('id') id:string){
            return await this.todoService.getById(id)
        }

    @Put(':id')
        async updateValue(@Param('id') id:string , @Body() todo:UpdateDto):Promise<Todo> {
            return  await this.todoService.update(id , todo);
        }

    @Delete(':id')
        async deleteValue(@Param('id') id:string ):Promise<Todo> {
            return await this.todoService.delete(id)
        }

}
