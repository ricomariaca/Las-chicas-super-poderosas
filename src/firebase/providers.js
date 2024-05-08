import { signInWithEmailAndPassword } from  'firebase/auth'

import { FirebaseAuth } from './config'

export const  authUserWithEmailPassword =  async (email, pasword) =>{
    try {
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, pasword);
        console.log(result.user);
        const {uid, displayName, photoURL }= result.user;

        return{
            ok:true,
            uid, displayName, photoURL, email

        }
    } catch (error) {
        return{
            ok:false,
            errorMessage: error.message
        }
    }

};

export const logOutUser = async () => {
    return await FirebaseAuth.signOut();
}