import { Component, OnInit } from '@angular/core';
import { PescadoService } from "../../providers/pescado.service";
import { FirebaseListObservable } from "angularfire2";
import { Pescado } from "../../model/pescado";
import { Router } from '@angular/router';
import { FilterListComponent, FilteredList } from '../filter-list/filter-list.component';


@Component({
  selector: 'app-pescados',
  templateUrl: './pescados.component.html',
  //styleUrls: ['./productos.component.css']
})
export class PescadosComponent implements OnInit {
  
  public pescados: FirebaseListObservable<Pescado[]>;
  public nombre: string;

  public saveSuccess:boolean;
  public warningSuccess:boolean;
  public dangerSuccess:boolean;
  
  public selectedProducto: Pescado;
  

  constructor(public pescadoService: PescadoService, private router: Router) {
    
    this.pescados = this.pescadoService.pescados;

  }

  ngOnInit() {}

  addProducto(name: HTMLInputElement){

   var categoria = 'PESCADO'; 
   this.saveSuccess = this.pescadoService.addProducto(name.value, categoria);
   name.value = null;

      if(this.saveSuccess){
          this.timer();
      }else{
        this.warningSuccess = true;
        this.timer();
      }

  }

  saveProducto(producto){

    this.saveSuccess = this.pescadoService.saveProducto(producto);
    this.selectedProducto = null;

    if(this.saveSuccess){
      this.timer();
    }else{
      this.warningSuccess = true;
      this.timer();
    }

  }

  onSelectProducto(producto: Pescado): void {

    this.selectedProducto = producto;
    
  }

  deleteProducto(producto: Pescado): void {

     this.dangerSuccess = true;
     this.pescadoService.deleteProducto(producto); 
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
