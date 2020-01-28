import { ProjectItemComponent } from './project/project-item/project-item.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const routes: Routes = [
  { path: '', children: [
    { path: '', component: ProjectComponent },
    { path: 'project/:id', component: ProjectItemComponent }
  ]},
  { path: 'login', component: LoginComponent },
  { path: '404', component: WildcardComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
