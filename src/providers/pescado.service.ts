import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2';
import {Pescado} from "../model/pescado" ;
import {Observable} from 'rxjs/Observable';
import * as firebase from "firebase";
import 'rxjs/Rx';



@Injectable()
export class PescadoService {
  
  public pescados: FirebaseListObservable<any[]>;
  
  public seleccionado:Pescado;

  public saveSuccess:boolean ;
  public warningSuccess:boolean ;
  public dangerSuccess:boolean ;

  
  constructor(public af: AngularFire) {
    this.pescados = this.af.database.list('pescados', {
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

          this.pescados.push(producto);
          this.saveSuccess = true;
    };

    return this.saveSuccess;
  }
  
  deleteProducto(producto){
    this.pescados.remove(producto.$key);
    this.dangerSuccess = true;
  }

  saveProducto(producto) {
    if (producto.$key) {
         this.af.database.object('/pescados/' +producto.$key).update({ name: producto.name });
    }
 
     return this.saveSuccess = true;
  }

  getProductos(){

    return this.pescados;
   
  }

  getValor(nombre, callback) {
    var databaseService = firebase.database();
    console.log(nombre);
          databaseService.ref("pescados").orderByChild("name").equalTo(nombre).once("value", function(snapshot){
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
