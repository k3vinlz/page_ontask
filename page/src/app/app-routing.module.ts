import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurComponent } from './configur/configur.component';
import { CreartareaComponent } from './creartarea/creartarea.component';
import { HomeComponent } from './home/home.component';
import { NUsuarioComponent } from './n-usuario/n-usuario.component';
import { TPendComponent } from './t-pend/t-pend.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "config", component: ConfigurComponent },
  { path: "pendientes", component: TPendComponent },
  { path: "crear", component: CreartareaComponent },
  { path: "registrar", component: NUsuarioComponent },
  { path: "user-list", component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
