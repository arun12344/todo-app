import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-tasks',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './create-tasks.component.html',
  styleUrl: './create-tasks.component.css',
})
export class CreateTasksComponent {
  val = { title: '', description: '' };
  @Output() tasks = new EventEmitter();

  onSubmit() {
    this.tasks.emit(this.val);
    console.log(this.val);
    this.val = { title: '', description: '' };
  }
}
