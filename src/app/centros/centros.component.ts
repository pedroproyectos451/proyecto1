import { Component, OnInit } from '@angular/core';
import { CentroService } from "../../providers/centro.service";
import { FirebaseListObservable } from "angularfire2";
import { Centro } from "../../model/centro";
import { Router } from '@angular/router';
import { FilterListComponent, FilteredList } from '../filter-list/filter-list.component';
import { LocalDataSource } from 'ng2-smart-table';



@Component({
  selector: 'app-centros',
  templateUrl: './centros.component.html',
  //styleUrls: ['./productos.component.css']
})
export class CentrosComponent implements OnInit {
  
  public centros: FirebaseListObservable<Centro[]>;
  public nombre: string;
  public saveSuccess:boolean;
  public warningSuccess:boolean;
  public dangerSuccess:boolean;
  
  public selectedCentro: Centro;
  
  

  constructor(public centroService: CentroService, private router: Router) {
    
    this.centros = this.centroService.centros;
    this.saveSuccess = false;
    this.warningSuccess = false;
    this.dangerSuccess = false;
  

  }

  ngOnInit() {}

  addCentro(name: HTMLInputElement){

      this.saveSuccess = this.centroService.addCentro(name.value);
      
      name.value = null;

      if(this.saveSuccess){
          this.timer();
      }else{
        this.warningSuccess = true;
        this.timer();
      }

  }

  saveCentro(centro){

    this.saveSuccess = this.centroService.saveCentro(centro);
    this.selectedCentro = null;

    if(this.saveSuccess){
      this.timer();
    }else{
      this.warningSuccess = true;
      this.timer();
    }

  }

  onSelectCentro(centro: Centro): void {

    this.selectedCentro = centro;
    
  }

  deleteCentro(centro: Centro): void {
    this.dangerSuccess = true;
    this.centroService.deleteCentro(centro); 
    this.timer();
  }

  cancelar() {
    this.selectedCentro = null;
  }  
  

  gotoDetailUsuario(): void {

    this.router.navigate(['/detail', this.selectedCentro]);
  }

  timer() {
    setTimeout (() => { this.saveSuccess = false; this.warningSuccess = false;this.dangerSuccess = false;}, 2000);
    
  }

  
}
