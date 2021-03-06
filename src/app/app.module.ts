import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimercomponenteComponent } from './primercomponente/primercomponente.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { IndexComponent } from './index/index.component';
import { Componenteparcial1Component } from './componenteparcial1/componenteparcial1.component';


const routes: Routes = [
  { path: 'index', component: PrimercomponenteComponent },
  { path: 'menu', component:  MenuComponent  },
  { path: 'contacto', component: ContactoComponent   },
  { path: 'quienes', component:  QuienesComponent   },
  { path: 'nosotros', component: NosotrosComponent   },
  { path: 'index', component: IndexComponent   },
  { path: 'componente', component: Componenteparcial1Component}
  
];

@NgModule({
  declarations: [
    AppComponent,
    PrimercomponenteComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    QuienesComponent,
    ContactoComponent,
    NosotrosComponent,
    IndexComponent,
    Componenteparcial1Component,
   
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes) ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
