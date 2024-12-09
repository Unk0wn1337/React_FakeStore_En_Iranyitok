import React, { useContext, useState } from "react";
import { ApiContext } from "../../context/ApiContext";



export default function UjTermek() {

    const { postAdat } = useContext(ApiContext);
    
    const [termek, setTermek] = useState({
      title: "",
      price: 10,
      description: "",
      image: "",
    });
  

    function valtozasKezelo(event) {
      const stermek = { ...termek };
      stermek[event.target.id] = event.target.id === "price" ? parseFloat(event.target.value) || 0 : event.target.value;
      setTermek({ ...stermek });
    }


    function gombKezelo(event) {
      event.preventDefault();
      postAdat("/products", termek);
    }
  

    return (
      <form
        onSubmit={(event) => {gombKezelo(event);}}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Név</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            placeholder="Termék neve"
            onChange={(event) => {valtozasKezelo(event);}}
            value={termek.title}/>
        </div>


        <div className="mb-3">
          <label htmlFor="price" className="form-label">Ár</label>
          <input
            type="number"
            min="10"
            max="100000"
            required
            className="form-control"
            id="price"
            value={termek.price}
            onChange={(event) => {valtozasKezelo(event);}}/>
        </div>


        <div className="mb-3">
          <label htmlFor="description" className="form-label">Leírás</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={termek.description}
            onChange={(event) => {valtozasKezelo(event);}}></textarea>
        </div>


        <div className="mb-3">
          <label htmlFor="image" className="form-label">Válassz képet!</label>
          <input
            className="form-control"
            type="file"
            id="image"
            value={termek.image}
            onChange={(event) => {valtozasKezelo(event);}}/>
        </div>


        <button type="submit" className="btn btn-primary">Küld</button>
      </form>
    );
  }
  