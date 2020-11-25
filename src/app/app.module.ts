import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { GetUserComponent } from './components/getUser/get-user/get-user.component';
import { CardComponent } from './components/card/card/card.component';
import { CreateUserComponent } from './components/createUser/create-user/create-user.component';

// para hacer funcionar rutas
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

// Para hacer peticiones HTTP
import { HttpClientModule } from '@angular/common/http';

// Para trabajar con formularios
import { FormsModule } from '@angular/forms';
// Para trabajar con formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';
import { SearchUserComponent } from './components/searchUser/search-user/search-user.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GetUserComponent,
    CardComponent,
    CreateUserComponent,
    SearchUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
