import React from "react";
import TermekAdmin from "./TermekAdmin";



export default function TermekekAdmin(props) {
    return (
        <table className="table table-stripped">

        <tbody>
            {props.termekek.map((termek) => {
            return <TermekAdmin termek={termek} key={termek.id} />;
            })}
        </tbody>
        
        </table>
    );
}
  