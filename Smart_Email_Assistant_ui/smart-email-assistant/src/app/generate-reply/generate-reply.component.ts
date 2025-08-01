import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-generate-reply',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatIconModule],
  templateUrl: './generate-reply.component.html',
  styleUrl: './generate-reply.component.css'
})
export class GenerateReplyComponent {
  value = "Please input"

}
