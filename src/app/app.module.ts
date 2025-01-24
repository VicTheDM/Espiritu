import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes'
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule, ErrorHandler, enableProdMode, APP_INITIALIZER, isDevMode   } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService, SharedModule } from 'primeng/api';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './components/views/Inicio/inicio.component';
import { ToastModule } from "primeng/toast";
import { GaleriaComponent } from './components/views/Galeria/galeria.component';
import { ContactoComponent } from './components/views/Contacto/contacto.component';
import { AcercaComponent } from './components/views/Acerca/acerca.component';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { PrimeTemplate } from 'primeng/api';
import { PrimeIcons } from 'primeng/api';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';

import { ImportsModule } from './imports';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GaleriaComponent,
    ContactoComponent,
    AcercaComponent,
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    ImportsModule,
    ButtonModule,
    AvatarModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ToolbarModule,
    LeafletModule,
    CarouselModule,
    GalleriaModule,
    ToastModule,
    BrowserModule,
    RouterModule,
    CommonModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
  ],
  providers: [PrimeIcons,PrimeTemplate, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
