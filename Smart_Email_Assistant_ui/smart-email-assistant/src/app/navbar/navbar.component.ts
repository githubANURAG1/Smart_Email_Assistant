import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { GenerateReplyComponent } from "../generate-reply/generate-reply.component";
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatTabsModule, GenerateReplyComponent,HomeComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  selectedTabIndex:any;
generateReplyTab() {
  console.log("changing the tab to generate reply");
  this.selectedTabIndex=1;
}
  menuList:string[]=["Home","Generate Reply","Contact Us"];
}
