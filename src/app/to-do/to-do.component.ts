import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { v4 as uuidV4 } from "uuid";
import { trigger, style, animate, transition } from "@angular/animations";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-to-do",
  templateUrl: "./to-do.component.html",
  styles: [
    `
      #date {
        font-size: 0.9em;
        border: 1px solid rgba(0, 0, 0, 0.125);
        background: #060607;
        color: #fff;
      }
      #toDoCard {
        width: 19rem;
        border: 1px solid black;
        border-radius: 1rem;
        background: #d5d8dd;
      }
      .form-check-input:focus {
        box-shadow: none;
      }
      #list {
        font-size: 0.9rem;
      }
      #taskInput {
        font-size: 0.875rem;
        background: white;
        box-shadow: none;
        border: 0;
        padding: 0.25rem 0.5rem;
        border-top-left-radius: 0.75rem;
        border-bottom-left-radius: 0.75rem;
      }
      button {
        border: 0 !important;
        background-color: #212529 !important;
        box-shadow: none !important;
      }
      button:last-child {
        border-right: 1px solid rgba(0, 0, 0, 0.125);
        border-top-right-radius: 0.75rem;
        border-bottom-right-radius: 0.75rem;
      }
      .btn:hover {
        border-color: rgba(0, 0, 0, 0.125);
      }
      @media screen and (min-width: 1024px) {
        #toDo {
          width: 92%;
        }
      }
    `,
  ],
  animations: [
    trigger("fade", [
      transition(":enter", [style({ opacity: 0 }), animate("0.15s ease", style({ opacity: 1 }))]),
      transition(":leave", [style({ opacity: 1 }), animate("0.15s ease", style({ opacity: 0 }))]),
    ]),
  ],
})
export class ToDoComponent implements OnInit {
  date!: string;
  tasks: Task[] = [];

  toDoForm = this.formBuilder.group({
    taskTitle: "",
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.date = formatDate(new Date(), "dd/MM/yyyy", "en");
    const tasksJSON = localStorage.getItem("tasks");
    if (tasksJSON === null) return;
    this.tasks = JSON.parse(tasksJSON);
  }

  onSubmit(): void {
    let title = this.toDoForm.value.taskTitle;

    if (title !== null) {
      let amountOfSpaces = title.length - title.replaceAll(" ", "").length;

      if (title.length === amountOfSpaces) {
        this.toDoForm.reset();
        return;
      }

      let newTask: Task = {
        id: uuidV4(),
        title: title,
        completed: false,
        createdAt: new Date(),
      };

      this.tasks.push(newTask);
      this.toDoForm.reset();
      this.saveTasks();
    } else {
      return;
    }
  }

  saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  clearTasks() {
    this.tasks = [];
    this.toDoForm.reset();
    localStorage.removeItem("tasks");
  }
}

export class Task {
  id!: string;
  title!: string;
  completed!: boolean;
  createdAt!: Date;
}
