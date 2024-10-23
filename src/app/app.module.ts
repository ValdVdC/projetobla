import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { MudaCorDirective } from './diretivas/muda-cor.directive';
import { BackCorDirective } from './diretivas/back-cor.directive';
import { HomeComponent } from './paginas/home/home.component';
import { BuscadorComponent } from './paginas/buscador/buscador.component';
import { DetalhesComponent } from './paginas/detalhes/detalhes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    MudaCorDirective,
    BackCorDirective,
    HomeComponent,
    BuscadorComponent,
    DetalhesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
