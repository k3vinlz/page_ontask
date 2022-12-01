import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { HomeComponent } from './home/home.component';
import { ConfigurComponent } from './configur/configur.component';
import { TPendComponent } from './t-pend/t-pend.component';
import { CreartareaComponent } from './creartarea/creartarea.component';
import { NUsuarioComponent } from './n-usuario/n-usuario.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContenedorComponent,
    HomeComponent,
    ConfigurComponent,
    TPendComponent,
    CreartareaComponent,
    NUsuarioComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      progressBar: true,
      progressAnimation: 'decreasing',
      countDuplicates: true,
      positionClass: 'toast-bottom-right',
    })
  ],
  providers: [
    NUsuarioComponent,
    CreartareaComponent,
    ConfigurComponent,
    TPendComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
