import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import {ReadAllComponent} from './read-all/read-all.component';
import {ReadOneComponent} from './read-one/read-one.component';
import {UpdateComponent} from './update/update.component';

const routes: Routes = [
      { path: '', redirectTo: 'pets', pathMatch: 'full'},
      { path: 'pets/new', component: CreateComponent},
      { path: 'pets', component: ReadAllComponent},
      { path: 'pets/:id', component: ReadOneComponent},
      { path: 'pets/:id/edit', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
