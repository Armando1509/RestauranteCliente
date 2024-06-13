import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";

import { FirebaseContext } from "../../components/firebase/index";

const NuevoPlatillo = () => {
  //constext para las operaciones de firebase
  const { firebase } = useContext(FirebaseContext);
  console.log(firebase);
  
  // Hook para redireccionar
  const navigate = useNavigate()

  //validacion y leer los datos del formulario
  const formik = useFormik({
    initialValues: {
      nombre: "",
      precio: "",
      categoria: "",
      imagen: "",
      descripcion: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(3, "Los platillos deben tener al menos 3 caracteres")
        .required("El nombre del platillo es obligatorio"),
      precio: Yup.number()
        .min(1, "Debes agregar precio")
        .required("El precio es obligatorio"),
      categoria: Yup.string().required("La categoria es obligatorio"),
      descripcion: Yup.string()
        .min(10, "La descripcion debe ser mas larga")
        .required("La descripcion es obligatoria es obligatorio"),
    }),
   
    onSubmit: (platillos) => {
      try {
        platillos.existencia = true
        const docRef = addDoc(collection(firebase.db,'productos'), platillos)
        console.log("Documento añadido con ID: ", docRef.id);
        //Redireccionar
        navigate('/menu')
      } catch (error) {
        console.error("Error añadiendo el documento: ", error);
      }
    }, 

   

  });

  return (
    <>
      <h1 className=" text-3x1 font-light mb-4">Agregar Platillo</h1>
      <div className=" flex justify-center mt-5">
        <div className="w-full max-w-3x1">
          <form onSubmit={formik.handleSubmit}>
            <div className=" mb-4">
              <label
                className=" block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombre"
                type="text"
                placeholder="Nombre del Platillo"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />
            </div>
            {formik.touched.nombre && formik.errors.nombre ? (
              <div
                className=" bg-red-100 border-1-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className=" font-bold">Hubo un error:</p>
                <p>{formik.errors.nombre}</p>
              </div>
            ) : null}
            <div className=" mb-4">
              <label
                className=" block text-gray-700 text-sm font-bold mb-2 "
                htmlFor="precio"
              >
                Precio
              </label>
              <input
                className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="precio"
                type="number"
                placeholder="$20"
                min="0"
                value={formik.values.precio}
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />
            </div>
            {formik.touched.precio && formik.errors.precio ? (
              <div
                className=" bg-red-100 border-1-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className=" font-bold">Hubo un error:</p>
                <p>{formik.errors.precio}</p>
              </div>
            ) : null}
            <div className=" mb-4">
              <label
                className=" block text-gray-700 text-sm font-bold mb-2"
                htmlFor="categoria"
              >
                Categoria
              </label>
              <select
                className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="categoria"
                name="categoria"
                value={formik.values.categoria}
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              >
                <option value="">--Seleccione--</option>
                <option value="desayuno">Desayuno</option>
                <option value="comida">Comida</option>
                <option value="cena">Cena</option>
                <option value="beida">Bebida</option>
                <option value="postre">Postre</option>
                <option value="ensalada">Ensalada</option>
              </select>
            </div>
            {formik.touched.categoria && formik.errors.categoria ? (
              <div
                className=" bg-red-100 border-1-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className=" font-bold">Hubo un error:</p>
                <p>{formik.errors.categoria}</p>
              </div>
            ) : null}
            <div className=" mb-4">
              <label
                className=" block text-gray-700 text-sm font-bold mb-2"
                htmlFor="imagen"
              >
                Imagen
              </label>
              <input
                className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="imagen"
                type="file"
                value={formik.values.imagen}
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="descripcion"
              >
                Descripción
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                id="descripcion"
                placeholder="Descripción del Platillo"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              ></textarea>
              {formik.touched.descripcion && formik.errors.descripcion ? (
                <div
                  className=" bg-red-100 border-1-4 border-red-500 text-red-700 p-4 mb-5"
                  role="alert"
                >
                  <p className=" font-bold">Hubo un error:</p>
                  <p>{formik.errors.descripcion}</p>
                </div>
              ) : null}
            </div>
            <input
              type="submit"
              className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
              value="Agregar Platillo"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default NuevoPlatillo;
