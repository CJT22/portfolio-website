import { Routes } from '@angular/router';

// Import components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path : '', title : 'CJTayag | Home', component : HomeComponent },
    { path : 'about', title : 'CJTayag | About', component : AboutComponent },
    { path : 'projects', title : 'CJTayag | Projects', component : ProjectsComponent },
    { path : 'contact', title : 'CJTayag | Contact', component : ContactComponent }
];
