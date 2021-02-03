// Stateless functional Component
// Short hand to create Stateless functional Component is "sfc"
const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <span className="badge badge-pill badge-secondary m-2">{props.totalCounters}</span>
            </div>
        </nav>
    );
}

export default NavBar;