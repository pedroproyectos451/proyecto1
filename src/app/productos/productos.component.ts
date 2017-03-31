import { Component, OnInit } from '@angular/core';
import { ProductoService } from "../../providers/producto.service";
import { FirebaseListObservable } from "angularfire2";
import { Producto } from "../../model/producto";
import { Router } from '@angular/router';
import { FilterListComponent, FilteredList } from '../filter-list/filter-list.component';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  //styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  public newMessage: string;
  public messages: FirebaseListObservable<any>;
  
  
  public productos: FirebaseListObservable<Producto[]>;
  public nombre: string;

  public saveSuccess:boolean;
  public warningSuccess:boolean;
  public dangerSuccess:boolean;
  
  public selectedProducto: Producto;
  

  constructor(public productoService: ProductoService, private router: Router) {
    
    this.productos = this.productoService.productos;

  }

  ngOnInit() {}

  addProducto(name: HTMLInputElement){

   this.saveSuccess = this.productoService.addProducto(name.value);
   name.value = null;

      if(this.saveSuccess){
          this.timer();
      }else{
        this.warningSuccess = true;
        this.timer();
      }

  }

  saveProducto(producto){

    this.saveSuccess = this.productoService.saveProducto(producto);
    this.selectedProducto = null;

    if(this.saveSuccess){
      this.timer();
    }else{
      this.warningSuccess = true;
      this.timer();
    }

  }

  onSelectProducto(producto: Producto): void {

    this.selectedProducto = producto;
    
  }

  deleteProducto(producto: Producto): void {

     this.dangerSuccess = true;
     this.productoService.deleteProducto(producto); 
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
