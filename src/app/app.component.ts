import { Component } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-angular';
  todos = [];
  HideDoneTodos = false;
  toggleCheck(id) {
    var itemIndex = this.todos.findIndex(function (c) {
      return c.id === id;
    });
    if (this.todos[itemIndex].done === true) {
      this.todos[itemIndex].done = false;
    } else {
      this.todos[itemIndex].done = true;
    }
  };
  addTodo(todoLabel, pin) {
    var newTodo = {
      id: uuid.v4(),
      label: todoLabel,
      done: false,
      pinned: pin
    };
    this.todos.push(newTodo)
  };
  hideAllDone() {
    let todoDone = document.getElementsByClassName("todoDone") as HTMLCollectionOf<HTMLElement>;
    console.log("hidetodoDone :: " + todoDone)
    for (let i = 0; i < todoDone.length; i++) {
      todoDone[i].style.display = 'none';
    }
    this.HideDoneTodos = true;
  };
  showAllDone() {
    let todoDone = document.getElementsByClassName("todoDone") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < todoDone.length; i++) {
      todoDone[i].style.display = 'flex';
    }
    this.HideDoneTodos = false;
  }
}
