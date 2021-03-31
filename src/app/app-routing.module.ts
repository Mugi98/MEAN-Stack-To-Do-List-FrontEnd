import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { FinalformComponent } from './finalform/finalform.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormdataComponent } from './formdata/formdata.component';
import { FormlistComponent } from './formlist/formlist.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';

import { ImageComponent } from './image/image.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { LoaddashComponent } from './loaddash/loaddash.component';
import { TodolistComponent } from './todolist/todolist.component';
import { UpdateformComponent } from './updateform/updateform.component';

const routes: Routes = [
  {
    path: 'todolist',component: TodolistComponent
  },
  {
    path: 'ngdirective',component: DirectiveComponent
  },
  {
    path: 'lodash',component: LoaddashComponent
  },
  {
    path: 'formTemplate',component: FormsDemoComponent
  },
  {
    path: 'formdata',component: FormdataComponent
  },
  {
    path: 'reactiveform',component: FormReactiveComponent
  },
  {
    path: 'io',component: InputOutputComponent
  },
  {
    path: 'finalform',component: FinalformComponent
  },
  {
    path: 'formlist',component: FormlistComponent
  },
  {
    path: 'uploadimage',component: ImageComponent
  },
  {
    path: 'formupdate/:id',component: UpdateformComponent
  },
  {
    path: 'admin', loadChildren:()=> import('./admin/admin.module')
    .then(mod => mod.AdminModule)
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  TodolistComponent,
  DirectiveComponent,
  LoaddashComponent,
  FormsDemoComponent,
  FormdataComponent,
  FormReactiveComponent,
  InputOutputComponent,
  FinalformComponent,
  FormlistComponent,
  UpdateformComponent,
  ImageComponent,
 
]
