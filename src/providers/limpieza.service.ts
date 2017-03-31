import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2';
import {Limpieza} from "../model/limpieza" ;
import {Observable} from 'rxjs/Observable';
import * as firebase from "firebase";
import 'rxjs/Rx';



@Injectable()
export class LimpiezaService {
  
  public limpiezas: FirebaseListObservable<any[]>;
  
  public seleccionado:Limpieza;

  public saveSuccess:boolean ;
  public warningSuccess:boolean ;
  public dangerSuccess:boolean ;

  
  constructor(public af: AngularFire) {
    this.limpiezas = this.af.database.list('limpiezas', {
      query: {
        orderByChild: 'name'
      }
    });
  }
  
  addProducto(nombre,categoria) {

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
            name:nombre,
            categoria:categoria
          };

          this.limpiezas.push(producto);
          this.saveSuccess = true;
    };

    return this.saveSuccess;
  }
  
  deleteProducto(producto){
    this.limpiezas.remove(producto.$key);
    this.dangerSuccess = true;
  }

  saveProducto(producto) {
    if (producto.$key) {
         this.af.database.object('/limpiezas/' +producto.$key).update({ name: producto.name });
    }
 
     return this.saveSuccess = true;
  }

  getProductos(){

    return this.limpiezas;
   
  }

  getValor(nombre, callback) {
    var databaseService = firebase.database();
    console.log(nombre);
          databaseService.ref("limpiezas").orderByChild("name").equalTo(nombre).once("value", function(snapshot){
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
