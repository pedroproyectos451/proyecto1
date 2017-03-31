import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2';
import {Producto} from "../model/producto" ;
import {Observable} from 'rxjs/Observable';
import * as firebase from "firebase";
import 'rxjs/Rx';



@Injectable()
export class ProductoService {
  
  public productos: FirebaseListObservable<any[]>;
  
  public seleccionado:Producto;

  public saveSuccess:boolean ;
  public warningSuccess:boolean ;
  public dangerSuccess:boolean ;

  
  constructor(public af: AngularFire) {
    this.productos = this.af.database.list('productos', {
      query: {
        orderByChild: 'name'
      }
    });
  }
  
  addProducto(nombre) {

     var valorBusqueda;
     this.getValor(nombre, function (err, result) {
      valorBusqueda = result;
      console.log(result);

    });
    
    if(valorBusqueda!= null)
    {
      this.saveSuccess=false;
      
    }else{
          var producto = {
            name:nombre
          };

          this.productos.push(producto);
          this.saveSuccess = true;
    };

    return this.saveSuccess;
  }
  
  deleteProducto(producto){
    this.productos.remove(producto.$key);
    this.dangerSuccess = true;
  }

  saveProducto(producto) {
    if (producto.$key) {
         this.af.database.object('/productos/' +producto.$key).update({ name: producto.name });
    }
 
     return this.saveSuccess = true;
  }

  getProductos(){

    return this.productos;
   
  }

  getValor(nombre, callback) {
    var databaseService = firebase.database();
    console.log(nombre);
          databaseService.ref("productos").orderByChild("name").equalTo(nombre).once("value", function(snapshot){
              var peep = snapshot.val();
              console.log(snapshot.val());     
              console.log(peep);     
              callback(null, peep);
          }, function (error) {
        // error wil be an Object
        callback(error)
    }); 
  
  }
}
