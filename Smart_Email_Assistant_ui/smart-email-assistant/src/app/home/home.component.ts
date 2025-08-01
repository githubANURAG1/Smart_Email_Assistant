import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 total_count= 68;
 value=0;
 ngOnInit(){
  this.startCount();
 }

 async startCount(){
  for(let i=0;i<this.total_count;i++){
    await this.delaysec();
    console.log(this.value++);
  }
 }
delaysec() {
  return new Promise(resolve => setTimeout(resolve, 20));
}
}
