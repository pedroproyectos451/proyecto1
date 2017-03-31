import { Component, OnInit } from '@angular/core';
import { FVService } from "../../providers/fv.service";
import { FirebaseListObservable } from "angularfire2";
import { FV } from "../../model/fv";
import { Router } from '@angular/router';
import { FilterListComponent, FilteredList } from '../filter-list/filter-list.component';


@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  //styleUrls: ['./productos.component.css']
})
export class FrutasComponent implements OnInit {
    
  public frutas: FirebaseListObservable<FV[]>;
  public nombre: string;

  public saveSuccess:boolean;
  public warningSuccess:boolean;
  public dangerSuccess:boolean;
  
  public selectedProducto: FV;
  

  constructor(public fvService: FVService, private router: Router) {
    
    this.frutas = this.fvService.frutas;

  }

  ngOnInit() {}

  addProducto(name: HTMLInputElement){

   var categoria = 'FRU&VER';
   this.saveSuccess = this.fvService.addProducto(name.value, categoria);
   name.value = null;

      if(this.saveSuccess){
          this.timer();
      }else{
        this.warningSuccess = true;
        this.timer();
      }

  }

  saveProducto(producto){

    this.saveSuccess = this.fvService.saveProducto(producto);
    this.selectedProducto = null;

    if(this.saveSuccess){
      this.timer();
    }else{
      this.warningSuccess = true;
      this.timer();
    }

  }

  onSelectProducto(producto: FV): void {

    this.selectedProducto = producto;
    
  }

  deleteProducto(producto: FV): void {

     this.dangerSuccess = true;
     this.fvService.deleteProducto(producto); 
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
