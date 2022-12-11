import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import TodoClass, { TodoStatuses } from '../dto/TodoClass';
import TodoService from '../services/todo.service';

@Controller()
export default class TodoController{
  constructor(private readonly todoService: TodoService) {}

  @Post()
  addTodo(@Body() todo: TodoClass) {
    const {title, description, status} = todo;
    return this.todoService.addTodo(title, description, status)
    .then(todo => todo)
    .catch(err => console.error(err));
  }

  @Get()
  getTodo(id:number) {
    return this.todoService.getTodo(id).then(todo => todo).catch(err => console.error(err));
  }

  @Put()
  updateTodo(@Body() todo:TodoClass) {
    return this.todoService.updateTodo(todo);
  }

  @Delete()
  deleteTodo(@Param('id') id: number) {
    return this.todoService.deleteTodo(id);
  }
}
