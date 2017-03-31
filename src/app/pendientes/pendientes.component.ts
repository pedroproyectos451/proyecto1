import { Component, OnInit } from '@angular/core';
import { PeticionService, CentroService } from "../../providers/index";
import { FirebaseListObservable } from "angularfire2";
import { Peticion, Centro } from "../../model/index";
import { Router } from '@angular/router';
import { FilterListComponent, FilteredList } from '../filter-list/filter-list.component';


@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  //styleUrls: ['./productos.component.css']
})
export class PendientesComponent implements OnInit {
  
  public newMessage: string;
  public messages: FirebaseListObservable<any>;
  
  
  public peticiones: FirebaseListObservable<Peticion[]>;
  public centros: FirebaseListObservable<Centro[]>;
  public nombre: string;
  
  public selectedPeticion: Peticion;

  public saveSuccess:boolean;
  public warningSuccess:boolean;
  public dangerSuccess:boolean;
  

  constructor(public peticionService: PeticionService, public centroService: CentroService, private router: Router) {
    
    this.peticiones = this.peticionService.peticiones;
    this.centros = this.centroService.centros;

  }

  ngOnInit() {}


  savePeticion(peticion){

    this.peticionService.savePeticion(peticion);
    this.selectedPeticion = null;
    this.warningSuccess = true;
    this.timer();

  }

  onSelectPeticion(peticion: Peticion): void {

    this.selectedPeticion = peticion;
    
  }

  deletePeticion(peticion: Peticion): void {
    this.dangerSuccess = true;
    this.peticionService.deletePeticion(peticion); 
    this.selectedPeticion = null;
    this.timer();
  }

  cancelar() {
    this.selectedPeticion = null;
  }  
  

  gotoDetailUsuario(): void {

    this.router.navigate(['/detail', this.selectedPeticion]);
  }

   timer() {
    setTimeout (() => { this.warningSuccess = false;this.dangerSuccess = false;}, 2000);
  }
  
}
