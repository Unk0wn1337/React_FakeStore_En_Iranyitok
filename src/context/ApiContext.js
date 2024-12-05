import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  const [termekLista, setTermekLista] = useState([]);


  const getAdat = async (vegpont,fv) => {
    try {
      const response = await myAxios.get(vegpont); // Adatok lekérése
      fv(response.data);
    } catch (err) {
      console.log("Hiba történt az adatok lekérésekor.");
    }
  };

  useEffect(() => {
    getAdat("/products",setTermekLista);
  }, []);

  return (
    <ApiContext.Provider value={{ termekLista }}>
      {children}
    </ApiContext.Provider>
  );
};