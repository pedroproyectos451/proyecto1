import { Component, OnInit } from '@angular/core';
import { LimpiezaService } from "../../providers/limpieza.service";
import { FirebaseListObservable } from "angularfire2";
import { Limpieza } from "../../model/limpieza";
import { Router } from '@angular/router';
import { FilterListComponent, FilteredList } from '../filter-list/filter-list.component';


@Component({
  selector: 'app-limpieza',
  templateUrl: './limpieza.component.html',
  //styleUrls: ['./productos.component.css']
})
export class LimpiezaComponent implements OnInit {
  
  
  public limpiezas: FirebaseListObservable<Limpieza[]>;
  public nombre: string;

  public saveSuccess:boolean;
  public warningSuccess:boolean;
  public dangerSuccess:boolean;
  
  public selectedProducto: Limpieza;
  

  constructor(public limpiezaService: LimpiezaService, private router: Router) {
    
    this.limpiezas = this.limpiezaService.limpiezas;

  }

  ngOnInit() {}

  addProducto(name: HTMLInputElement){
 
   var categoria = 'LIMPIEZA';
   this.saveSuccess = this.limpiezaService.addProducto(name.value, categoria);
   name.value = null;

      if(this.saveSuccess){
          this.timer();
      }else{
        this.warningSuccess = true;
        this.timer();
      }

  }

  saveProducto(producto){

    this.saveSuccess = this.limpiezaService.saveProducto(producto);
    this.selectedProducto = null;

    if(this.saveSuccess){
      this.timer();
    }else{
      this.warningSuccess = true;
      this.timer();
    }

  }

  onSelectProducto(producto: Limpieza): void {

    this.selectedProducto = producto;
    
  }

  deleteProducto(producto: Limpieza): void {

     this.dangerSuccess = true;
     this.limpiezaService.deleteProducto(producto); 
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
