import { Injectable } from '@nestjs/common';
import { TodoModule } from './todo.module';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './model/todo.model';
import mongoose from 'mongoose';
import { TodoDto } from './todo.dto/create.dto';
import { UpdateDto } from './todo.dto/update.dto';
import {Query} from 'express-serve-static-core'

@Injectable()
export class TodoService {

    constructor(@InjectModel(Todo.name) private todoModel:mongoose.Model<Todo>){}

    async findAll(query:Query):Promise<Todo[]> {
        //Pagination API
        const resPerPage = 5
        const currentPage = Number(query.page) || 1
        const skip = resPerPage * (currentPage-1)

        // Search API
        const name = query.name?{
            name:{
                $regex:query.name,
                $options: 'i'
            }
        }:{}
        const res = await this.todoModel.find({...name}).limit(resPerPage).skip(skip)
        return res;
    }

    async createTodo(todo:TodoDto):Promise<Todo> {
        const value = await this.todoModel.create(todo)
        return value;
    }

    async getById(id:string):Promise<Todo> {
        const response = await this.todoModel.findById(id)
        return response
    }

    async update(id:string , todo:UpdateDto):Promise<Todo> {
        const update = await this.todoModel.findByIdAndUpdate(id , todo)
        return update
    }

    async delete(id:string):Promise<Todo> {
        const deleted = await this.todoModel.findByIdAndDelete(id);
        return deleted;
    }

}
