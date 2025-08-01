import { Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { GenerateReplyComponent } from './generate-reply/generate-reply.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {   path: '',
        component: NavbarComponent
    },
    {
        path: 'generateReply',
        component: GenerateReplyComponent
    }
];
