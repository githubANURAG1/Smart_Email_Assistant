import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ResponseDTO } from '../models/ResponseDTO';

@Component({
  selector: 'app-generate-reply',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatIconModule,  MatInputModule, HttpClientModule],
  templateUrl: './generate-reply.component.html',
  styleUrl: './generate-reply.component.css'
})
export class GenerateReplyComponent {
  constructor(private http: HttpClient) {}
reply: any;
ngOnInit(){

}

submitForm(form: NgForm) {
  this.http.post<ResponseDTO>('http://localhost:8080/replyEmail/replyEmailwithAI', {
    //"emailBody": "hello, anurag this side, the meeting today went really well. looking forward to close the dea Thanks, Anurag rai",
    "emailBody": form.value.name,
    "tone": "submissive",
    "subject": "Client Meeting"
})
  .subscribe(response => {
    console.log(response.emailReply);
  console.log(response);
    this.reply=response.emailReply;
  });
console.log(form.value.name);
}

generateReply(form: NgForm) {
  this.reply=form.value.name;
  
console.log(form.value);
}
}

