// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  // Aquí defines las rutas de la aplicación
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Configuramos el módulo de rutas principal
  ],
  providers: [], // Puedes agregar servicios globales aquí
  bootstrap: [AppComponent], // Especifica el componente principal de arranque
})
export class AppModule {}
