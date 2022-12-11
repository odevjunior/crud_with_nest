import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsUtils, Repository } from 'typeorm';
import Todo, {TodoStatuses} from "../dto/TodoClass"

@Injectable()
export default class TodoService {

  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>
  ){}

  addTodo(title: string, description: string, state: TodoStatuses): Promise<Todo> {
    try {
        let todo = new Todo(title, description, state)
        return this.todoRepository.save(todo);
    } catch (error) {
        this.errorAction(error);
    }
  }

  getTodo(id: number) {
    try {
      return this.todoRepository.find()
    } catch (error) {
      this.errorAction(error);
    }
  }

  async deleteTodo(id:number) {
    try {
      return await this.todoRepository.delete(id);
    } catch (error) {
      this.errorAction(error);
    }
  }

  updateTodo(todo:Todo) {
    try {
      this.todoRepository.update(todo.id, todo);
    } catch (error) {
     this.errorAction(error);
    }
  }

  private errorAction(error) {
      console.log(error);
      throw new Error(error);
  }
  
}
