import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { v4 as uuidV4 } from "uuid";
import { trigger, style, animate, transition } from "@angular/animations";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
  animations: [
    trigger("fade", [
      transition(":enter", [style({ opacity: 0 }), animate("0.15s ease", style({ opacity: 1 }))]),
      transition(":leave", [style({ opacity: 1 }), animate("0.15s ease", style({ opacity: 0 }))]),
    ]),
  ],
})
export class ListComponent implements OnInit {
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

  clearTasks(longPress: boolean) {
    if (longPress) {
      this.tasks = [];
      this.saveTasks();
      this.toDoForm.reset();
    } else {
      this.tasks = this.tasks.filter((task) => !task.completed);
      this.saveTasks();
      this.toDoForm.reset();
    }
  }
}

export class Task {
  id!: string;
  title!: string;
  completed!: boolean;
  createdAt!: Date;
}
