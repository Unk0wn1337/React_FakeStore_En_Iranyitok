import Public from "./pages/Public";
import Admin from "./pages/Admin";
import NoPage from "./pages/NoPage";
import Linkek from "./pages/Linkek";

import { BrowserRouter, Routes, Route } from "react-router-dom";




export default function App() {

  return (
    <div className="">

      <BrowserRouter>
        <Routes>

            <Route path="/" element={<Linkek />}> 
            <Route index element={<Public />} />
            <Route path="admin" element={<Admin />} />
            <Route path="*" element={<NoPage />} />
            </Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}