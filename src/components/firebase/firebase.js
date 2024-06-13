import {initializeApp} from 'firebase/app'
import  firebaseConfig  from './config'

class Firebase{
    constructor(){
        this.app = initializeApp(firebaseConfig)
    }
}

const firebase = new Firebase()

export default firebase