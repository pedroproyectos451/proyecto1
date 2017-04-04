import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, Routes } from "@angular/router";
import { AF } from "../providers/af";
import { HeroService } from "../providers/hero.service";
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterListComponent,FilteredList } from './filter-list/filter-list.component';
import { HeroSearchService } from "../providers/hero-search.service";
import { ProductosComponent } from './productos/productos.component';
import { CentrosComponent } from './centros/centros.component';
import { PendientesComponent } from './pendientes/pendientes.component';
import { PeticionesComponent } from './peticiones/peticiones.component';
import { ProductoService } from "../providers/producto.service";
import { CentroService } from "../providers/centro.service";
import { PeticionService } from "../providers/peticion.service";
import { CarneService } from "../providers/carne.service";
import { LacteoService } from "../providers/lacteo.service";
import { LimpiezaService } from "../providers/limpieza.service";
import { PescadoService } from "../providers/pescado.service";
import { FVService } from "../providers/fv.service";
import { initializeApp, database } from 'firebase';
import { HistoricoComponent } from './historico/historico.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CarnesComponent } from './carnes/carnes.component';
import { PescadosComponent } from './pescados/pescados.component';
import { LimpiezaComponent } from './limpieza/limpieza.component';
import { FrutasComponent } from './frutas/frutas.component';
import { LacteosComponent } from './lacteos/lacteos.component';
import { CarnesPeticionesComponent } from './carnes-peticiones/carnes-peticiones.component';
import { PescadosPeticionesComponent } from './pescados-peticiones/pescados-peticiones.component';
import { LacteosPeticionesComponent } from './lacteos-peticiones/lacteos-peticiones.component';
import { FrutasPeticionesComponent } from './frutas-peticiones/frutas-peticiones.component';
import { LimpiezasPeticionesComponent } from './limpiezas-peticiones/limpiezas-peticiones.component';
import { Historico2Component } from './historico2/historico2.component';

export const firebaseConfig = {
  apiKey: "xxxx",
    authDomain: "xxxx",
    databaseURL: "xxx",
    storageBucket: "xxxx",
    messagingSenderId: "xxxxyyy"
};

initializeApp(firebaseConfig);

const routes: Routes = [
  { path: 'peticiones',  component: PeticionesComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'productos',  component: ProductosComponent},
  { path: 'centros',  component: CentrosComponent},
  { path: 'pendientes',  component: PendientesComponent},
  { path: '',  component: PendientesComponent},
  { path: 'chat', component: HomePageComponent },
  { path: 'historico',  component: HistoricoComponent},
  { path: 'carnes',  component: CarnesComponent},
  { path: 'pescados',  component: PescadosComponent},
  { path: 'limpieza',  component: LimpiezaComponent},
  { path: 'lacteos',  component: LacteosComponent},
  { path: 'frutas',  component: FrutasComponent},
  { path: 'carnesPeticiones',  component: CarnesPeticionesComponent},
  { path: 'pescadosPeticiones',  component: PescadosPeticionesComponent},
  { path: 'limpiezasPeticiones',  component: LimpiezasPeticionesComponent},
  { path: 'lacteosPeticiones',  component: LacteosPeticionesComponent},
  { path: 'frutasPeticiones',  component: FrutasPeticionesComponent}
  
  
];

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule 
  ],
  declarations: [ AppComponent, LoginPageComponent, HomePageComponent, 
                  FilterListComponent, FilteredList,  ProductosComponent,
                  CentrosComponent, PendientesComponent, PeticionesComponent, 
                  HistoricoComponent, CarnesComponent, PescadosComponent, 
                  LimpiezaComponent, FrutasComponent, LacteosComponent, CarnesPeticionesComponent, 
                  PescadosPeticionesComponent, LacteosPeticionesComponent, FrutasPeticionesComponent, 
                  LimpiezasPeticionesComponent, Historico2Component],
  bootstrap: [ AppComponent ],
  providers: [AF,HeroService,HeroSearchService, ProductoService, CentroService, PeticionService, CarneService, LacteoService, LimpiezaService, PescadoService,FVService]
})
export class AppModule {}
