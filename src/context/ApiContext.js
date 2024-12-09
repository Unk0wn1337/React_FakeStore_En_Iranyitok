import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";





export const ApiContext = createContext("");


export const ApiProvider = ({ children }) => {
  const [termekLista, setTermekLista] = useState([]);
  const [apiAdat, setApiAdat] = useState(null);
  const [varakozas, setVarakozas] = useState(false);
  const [Hiba, setHiba] = useState(null);


  const getAdat = async (vegpont,fv) => {
    try {
      const response = await myAxios.get(vegpont); // Adatok lekérése
      fv(response.data);
    } catch (err) {
      console.log("Hiba történt az adatok lekérésekor.");
    }
  };



  const postAdat = async (vegpont, data) => {
    setVarakozas(true);
    setHiba(null);
    try {
      const response = await myAxios.post(vegpont, data);
      console.log("Sikeresen elküldött adat:", response.data);
    } catch (err) {
      setHiba("Hiba történt az adat elküldésekor.");
    } finally {
      setVarakozas(false);
    }
  };




  useEffect(() => {
    getAdat("/products",setTermekLista);
  }, []);



  return (
    <ApiContext.Provider value={{ termekLista, getAdat, postAdat, apiAdat }}>
      {children}
    </ApiContext.Provider>
  );
};