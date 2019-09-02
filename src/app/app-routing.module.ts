import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartPage } from './pages/start/start.page';
import { UserListPage } from './pages/user-list/user-list.page';
import { UserPage } from './pages/user/user.page';
import { NotFoundPage } from './pages/not-found/not-found.page';

const routes: Routes = [
  { path: '', component: StartPage },
  { path: 'userList', component: UserListPage },
  { path: 'user', component: UserPage },
  { path: 'user/:id', component: UserPage },
  { path: '**', component: NotFoundPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }