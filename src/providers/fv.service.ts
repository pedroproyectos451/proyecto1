import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2';
import {FV} from "../model/fv" ;
import {Observable} from 'rxjs/Observable';
import * as firebase from "firebase";
import 'rxjs/Rx';



@Injectable()
export class FVService {
  
  public frutas: FirebaseListObservable<any[]>;
  
  public seleccionado:FV;

  public saveSuccess:boolean ;
  public warningSuccess:boolean ;
  public dangerSuccess:boolean ;

  
  constructor(public af: AngularFire) {
    this.frutas = this.af.database.list('frutas', {
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

          this.frutas.push(producto);
          this.saveSuccess = true;
    };

    return this.saveSuccess;
  }
  
  deleteProducto(producto){
    this.frutas.remove(producto.$key);
    this.dangerSuccess = true;
  }

  saveProducto(producto) {
    if (producto.$key) {
         this.af.database.object('/frutas/' +producto.$key).update({ name: producto.name });
    }
 
     return this.saveSuccess = true;
  }

  getProductos(){

    return this.frutas;
   
  }

  getValor(nombre, callback) {
    var databaseService = firebase.database();
    console.log(nombre);
          databaseService.ref("frutas").orderByChild("name").equalTo(nombre).once("value", function(snapshot){
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
