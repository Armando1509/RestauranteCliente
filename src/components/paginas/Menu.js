import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
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
