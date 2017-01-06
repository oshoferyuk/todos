import { IUser } from './user.interface';

declare var firebase: any;

export class AuthService{
    singup(user:IUser){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
            console.log('singup auth error');
        });
    }

    signin(user:IUser){
    	firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
  			console.log('singin auth error');
		});
    }

    logout(){
    	firebase.auth().signOut();
    }

    isAuth(){
    	var user = firebase.auth().currentUser;				
		if (user) {		  
		  return true;
		} else {			
		  return false;
		}
    }
}
