import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <div class="container-fluid mx-3">
                <Link class="navbar-brand" to="/">Home</Link>
                <div class="navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-5">
                        <li class="nav-item mx-5">
                        <Link class="nav-link text-secondary" to="/projects">My Projects</Link>
                        </li>
                        <li class="nav-item mx-5">
                        <Link class="nav-link text-secondary" to="/contact">Contact</Link>
                        </li>
                        <li class="nav-item mx-5">
                        <Link class="nav-link text-secondary" to="/about">About me</Link>
                        </li>
                    </ul>

                    <div class="d-flex" id="navbarSearch">                      
                        <input type="text" class="form-control" placeholder="Search" />
                        <button class="btn btn-outline-secondary" type="search">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;

