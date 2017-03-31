import { Component, OnInit } from '@angular/core';
import { CarneService } from "../../providers/carne.service";
import { FirebaseListObservable } from "angularfire2";
import { Carne } from "../../model/carne";
import { Router } from '@angular/router';
import { FilterListComponent, FilteredList } from '../filter-list/filter-list.component';


@Component({
  selector: 'app-carnes',
  templateUrl: './carnes.component.html',
  //styleUrls: ['./productos.component.css']
})
export class CarnesComponent implements OnInit {
  
  public carnes: FirebaseListObservable<Carne[]>;
  public nombre: string;

  public saveSuccess:boolean;
  public warningSuccess:boolean;
  public dangerSuccess:boolean;
  
  public selectedProducto: Carne;
  

  constructor(public carneService: CarneService, private router: Router) {
    
    this.carnes = this.carneService.carnes;

  }

  ngOnInit() {}

  addProducto(name: HTMLInputElement){
   
   var categoria = 'CARNE';
   this.saveSuccess = this.carneService.addProducto(name.value, categoria);
   name.value = null;

      if(this.saveSuccess){
          this.timer();
      }else{
        this.warningSuccess = true;
        this.timer();
      }

  }

  saveProducto(producto){

    this.saveSuccess = this.carneService.saveProducto(producto);
    this.selectedProducto = null;

    if(this.saveSuccess){
      this.timer();
    }else{
      this.warningSuccess = true;
      this.timer();
    }

  }

  onSelectProducto(producto: Carne): void {

    this.selectedProducto = producto;
    
  }

  deleteProducto(producto: Carne): void {

     this.dangerSuccess = true;
     this.carneService.deleteProducto(producto); 
     this.timer();
     
  }

  cancelar() {
    this.selectedProducto = null;
  }  
  

  gotoDetailUsuario(): void {

    this.router.navigate(['/detail', this.selectedProducto]);
  }

   timer() {
    setTimeout (() => { this.saveSuccess = false; this.warningSuccess = false;this.dangerSuccess = false;}, 2000);
    
  }

  
}
