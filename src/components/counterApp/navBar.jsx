// Stateless functional Component
// Short hand to create Stateless functional Component is "sfc"
const NavBar = ({ totalCounters }) => {
    console.log('NavBar - Rendered');
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar{" "}
                    <span className="btn btn-secondary m-2">{totalCounters}</span>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;