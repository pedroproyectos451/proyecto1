import { Component, OnInit } from '@angular/core';
import { LacteoService } from "../../providers/lacteo.service";
import { FirebaseListObservable } from "angularfire2";
import { Lacteo } from "../../model/lacteo";
import { Router } from '@angular/router';
import { FilterListComponent, FilteredList } from '../filter-list/filter-list.component';


@Component({
  selector: 'app-lacteos',
  templateUrl: './lacteos.component.html',
  //styleUrls: ['./productos.component.css']
})
export class LacteosComponent implements OnInit {
  
   
  public lacteos: FirebaseListObservable<Lacteo[]>;
  public nombre: string;

  public saveSuccess:boolean;
  public warningSuccess:boolean;
  public dangerSuccess:boolean;
  
  public selectedProducto: Lacteo;
  

  constructor(public lacteoService: LacteoService, private router: Router) {
    
    this.lacteos = this.lacteoService.productos;

  }

  ngOnInit() {}

  addProducto(name: HTMLInputElement){

    var categoria = 'LAC&OTROS'; 
   this.saveSuccess = this.lacteoService.addProducto(name.value, categoria);
   name.value = null;

      if(this.saveSuccess){
          this.timer();
      }else{
        this.warningSuccess = true;
        this.timer();
      }

  }

  saveProducto(producto){

    this.saveSuccess = this.lacteoService.saveProducto(producto);
    this.selectedProducto = null;

    if(this.saveSuccess){
      this.timer();
    }else{
      this.warningSuccess = true;
      this.timer();
    }

  }

  onSelectProducto(producto: Lacteo): void {

    this.selectedProducto = producto;
    
  }

  deleteProducto(producto: Lacteo): void {

     this.dangerSuccess = true;
     this.lacteoService.deleteProducto(producto); 
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
