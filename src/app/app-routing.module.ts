import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./layout/auth/login/login.module').then((m) => m.LoginModule) },
  { path: 'dashboard', loadChildren: () => import('./layout/dashboard/dashboard.module').then((m) => m.DashboardModule) },
  { path: 'projects', loadChildren: () => import('./layout/projects/projects.module').then((m) => m.ProjectsModule) },
  { path: 'tasks', loadChildren: () => import('./layout/tasks/tasks.module').then((m) => m.TasksModule) },
  { path: 'calender', loadChildren: () => import('./layout/calender/calender.module').then((m) => m.CalenderModule) },
  { path: '**', redirectTo:   '/tasks', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
