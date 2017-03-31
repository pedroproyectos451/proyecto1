import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,FirebaseObjectObservable, FirebaseApp} from 'angularfire2';
import {Centro} from "../model/centro" ;
import {Observable} from 'rxjs/Observable';
import * as firebase from "firebase";
import 'rxjs/Rx';



@Injectable()
export class CentroService {
   
  public centros: FirebaseListObservable<any[]>;
   
  public seleccionado:Centro;

  public saveSuccess:boolean ;
  public warningSuccess:boolean ;
  public dangerSuccess:boolean ;
  
  constructor(public af: AngularFire) {
    this.centros = this.af.database.list('centros', {
      query: {
        orderByChild: 'name'
      }
    });
       
  }
  
  addCentro(nombre) {

    var valorBusqueda;
    this.getValor(nombre, function (err, result) {
      valorBusqueda = result;
      console.log(result);

    });
    
    if(valorBusqueda!= null)
    {
      this.saveSuccess=false;
      
    }else{
          var centroAdd = {
            name:nombre
          };

          this.centros.push(centroAdd);
          this.saveSuccess = true;
        
    };

    return this.saveSuccess;
  }
  deleteCentro(centro){
    this.centros.remove(centro.$key);
     this.dangerSuccess = true;
  }

  saveCentro(centro) {
    if (centro.$key) {
         this.af.database.object('/centros/' +centro.$key).update({ name: centro.name });
    }

    return this.saveSuccess = true;
 
  }

  getCentros(){

    return this.centros;
   
  }

  getValor(nombre, callback) {
   var databaseService = firebase.database();
   console.log(nombre);
        databaseService.ref("centros").orderByChild("name").equalTo(nombre).once("value", function(snapshot){
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
