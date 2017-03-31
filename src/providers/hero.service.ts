import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2';
import {AF} from "./af";
import {Hero} from "../model/hero" ;
import {Usuario} from "../model/usuario" 
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';



@Injectable()
export class HeroService {
  public messages: FirebaseListObservable<any>;
  public usuarios: FirebaseListObservable<Usuario[]>;
  public heroes: FirebaseListObservable<Hero[]>;
  public displayName: string;
  public email: string;
  public seleccionado:Hero;
  public retornar:Promise<any>;
  public pruebas: FirebaseListObservable<any>;
  valor: FirebaseObjectObservable<any>;
  

  constructor(public af: AngularFire, public af2:AF) {
    this.messages = this.af.database.list('messages');
    this.heroes = this.af.database.list('heroes');
    this.usuarios = this.af.database.list('usuarios');
    this.displayName = af2.displayName;
    this.email = af2.email;
    this.pruebas = this.af.database.list('usuarios', { preserveSnapshot: true });
        this.pruebas
        .subscribe(snapshots => {
            snapshots.forEach(snapshot => {
            //console.log("Valor de la busqueda: "+ '/usuarios'+term)
            console.log(snapshot.key)
            console.log(snapshot.val())
        });
    })
  }

  /**
   * Saves a message to the Firebase Realtime Database
   * @param text
   */
  sendMessage(text) {
    var message = {
      message: text,
      displayName: this.displayName,
      email: this.email,
      timestamp: Date.now()
    };
    this.messages.push(message);
  }

  addHero(nombre,apellido) {
    var hero = {
      name:nombre,
      apellido:apellido
    }
    this.heroes.push(hero);
  }

  registraPRL(name, email){
    this.usuarios.push({
      email: email,
      name: name
    });
  }

  deleteHero(hero){
    this.heroes.remove(hero.$key);
  }

  deleteUsuario(usuario){
    this.usuarios.remove(usuario.$key);
  }

  saveHero(hero) {
    if (hero.$key) {
         
         this.af.database.object('/heroes/' +hero.$key).update({ name: hero.name });
    }else{
         this.heroes.push(hero);
   }
 
  }
  

  getItem(name:string): Observable<any> {        
        return this.af.database.object('/heroes/' +name).map((profile) => {
                console.log('inside success');
                console.log(profile);
                this.seleccionado = <Hero>profile;                    
                console.log(this.seleccionado);        
                return profile; 
            },
            error => {
                console.log(error)
            });
}


}
