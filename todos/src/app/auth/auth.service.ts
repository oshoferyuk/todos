import { IUser } from './user.interface';

declare var firebase: any;

export class AuthService{
    singup(user:IUser){

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
            console.log('auth error');        
        });

    }
}
