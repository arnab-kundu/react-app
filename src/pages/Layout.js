import { Outlet, Link } from "react-router-dom";
import "../styles/layout.css"

const Layout = () => {
  return (
    <>
      <nav id="menu1">
        <ul id="list-ho">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/life_cycle">life_cycle</Link>
          </li>
          <li>
            <Link to="/twitterLogin">twitterLogin</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;