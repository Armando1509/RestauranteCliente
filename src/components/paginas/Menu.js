import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../firebase/index';
import { collection, onSnapshot } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Platillo from '../ui/Platillo';

const Menu = () => {
  // Definir el state para guardar los platillos
  const [platillos, guardarPlatillos] = useState([]);
  const { firebase } = useContext(FirebaseContext);
/*   console.log('desde firabase', firebase.db); */
  

  // Consultar BD
   useEffect(() => {
    const obternerPlatillos = () => {
      const productosCollection = collection(firebase.db, 'productos');
      console.log(productosCollection);
      onSnapshot(productosCollection, manejarSnapshot);
    }
    obternerPlatillos();
    
  }, [firebase.db]); 

  // Snapshot nos permite utilizar la bd en tiempo real de firebase
  function manejarSnapshot(snapshot) {
    const platillos = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    // Almacena en el state
     
    console.log(platillos);
    guardarPlatillos(platillos);
  } 
   
  return (
    <div>
      <h1 className='text-3x1 font-light mb-4' >Hola desde Menu</h1>
      <Link to='/nuevo-platillo' className='bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold' >
        Agregar platillo
      </Link>
      
    </div>
  );
};

export default Menu;
