import React from "react";
import { Route, Routes } from "react-router-dom";

import firebase, { FirebaseContext } from "./components/firebase";

import Ordenes from "./components/paginas/Ordenes";
import Menu from "./components/paginas/Menu";
import NuevoPlatillo from "./components/paginas/NuevoPlatillo";
import Sidebar from "./components/ui/Sidebar";

function App() {
  return (
    <FirebaseContext.Provider
    value={{firebase}}
    >
      <div className="md:flex min-h-screen">
        <Sidebar />
        <div className="md:w-3/5 xl:w-4/5 p-6">
          <Routes>
            <Route path="/" Component={Ordenes} />
            <Route path="/menu" Component={Menu} />
            <Route path="/nuevo-platillo" Component={NuevoPlatillo} />
          </Routes>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
