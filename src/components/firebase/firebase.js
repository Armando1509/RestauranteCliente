import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import firebaseConfig from './config';

class Firebase {
    constructor() {
        if (!getApps().length) {
            // Inicializa la aplicación de Firebase
            this.app = initializeApp(firebaseConfig);
        } else {
            this.app = getApps()[0]; // Usa la app ya inicializada
        }
        
        // Inicializa Firestore
        this.db = getFirestore(this.app);
        this.storage = getStorage(this.app)
    }
}

 const firebase = new Firebase(); 

/* const FirebaseContext = React.createContext(firebase);

export { FirebaseContext, firebase }; */
export default firebase
export const storage = firebase.storage 
