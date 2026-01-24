import { Component } from '@angular/core';
import { DisplayTasksComponent } from './display-tasks/display-tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DisplayTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  val = { title: '', description: '' };
}
