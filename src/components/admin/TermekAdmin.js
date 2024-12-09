import React from "react";



export default function TermekAdmin(props) {

    function torol(id) {
        console.log(`Törölve a termék, id: ${id}`);
      }
    
      function modosit(id) {
        console.log(`Szerkesztés a termék, id: ${id}`);
      }

    return (
        <tr>
        {Object.entries(props.termek).map(([kulcs, value]) => {
            if (kulcs === "image") {
                return (
                <td key={kulcs}>
                <img src={value} />
                </td>
            );
            } else if (kulcs !== "rating") {
                return <td key={kulcs}>{value}$</td>;
            } else {
                return null;
            }
        })}

        <td>
            <button
            className="btn btn-outline-danger"
            onClick={() => {
                torol(props.termek.id);
            }}
            >Törlés</button>
        </td>
        <td>
            <button
            className="btn btn-outline-primary"
            onClick={() => {
                modosit(props.termek.id);
            }}
            >Szerkesztés</button>
        </td>
        </tr>
    );
}
 
  