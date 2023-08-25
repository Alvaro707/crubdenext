import React from "react";
import { Layout } from "../components/Layout";

function about() {
  return (
    <Layout>
      <div className="text-center p-10">
      <h1 className="font-bold text-2xl my-4">DumasComercio </h1>
      <p className="text-black-300">
      Bienvenidos a compras de cualquier necesidad que tengas
      te garantizamos que quedaras sastifecho en Dumas Comercio.  .
      </p>

      <p className="text-black-300">
      Espero que sea de tu agrado esta sitio de compras  .
      </p>
      
      
      <h1 className="font-bold text-2xl my-4">Contactar</h1>

      <p className="text-black-300">
       Contactar a Alvaro Dumas.
       Gmail: daumasalvaro707@gmail.com.
       Hotmail: alvaro.dumas120@est.unanleon.edu.ni.
       <br></br>
       Celular: +505 5725 - 8837.
      </p>
      </div>
    </Layout>
  );
}

export default about;
