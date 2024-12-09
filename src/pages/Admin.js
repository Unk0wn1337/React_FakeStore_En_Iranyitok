import UjTermek from "../components/admin/UjTermek";
import TermekekAdmin from "../components/admin/TermekekAdmin";
import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";



export default function Admin() {

    const { apiAdat } = useContext(ApiContext);

    let tartalom;
    if (apiAdat) {
        tartalom = <TermekekAdmin termekek={apiAdat} />;
    } else {
        tartalom = "Nincs adat";
    }

    return (
        <main className="row g-5">
        
        <section>
            <UjTermek />
        </section>

        <article>
            <h1>Termékek</h1>
            {tartalom}
        </article>

        </main>
    );
}