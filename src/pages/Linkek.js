import { Outlet, Link } from "react-router-dom";


  
export default function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
    
            <ul className="navbar-nav ">
              <li className="nav-item">

                <Link className="nav-link" to="/">
                  Publikus
                </Link>

              </li>
              <li className="nav-item">

                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
                
              </li>
            </ul>
          
        </div>
      </nav>

      <Outlet />
    </>
  );
}