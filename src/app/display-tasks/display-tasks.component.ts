import { Component, Input } from '@angular/core';
import { CreateTasksComponent } from '../create-tasks/create-tasks.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-display-tasks',
  standalone: true,
  imports: [CreateTasksComponent, MatCardModule],
  templateUrl: './display-tasks.component.html',
  styleUrl: './display-tasks.component.css',
})
export class DisplayTasksComponent {
  alltasks: { title: string; description: string }[] = [];

  displaytasks(task: { title: string; description: string }) {
    this.alltasks.push(task);
    console.log('output', this.alltasks);
  }
}
