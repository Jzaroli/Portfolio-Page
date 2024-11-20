const styles = {
    marginLeft: '1rem'
}

function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto align-items-center justify-content-between">
                <li style={styles} className="nav-item">
                    <a className="nav-link" href="#aboutme">About Me</a>
                </li>
                <li style={styles} className="nav-item">
                    <a className="nav-link" href="#portfolio">Portfolio</a>
                </li>
                <li style={styles} className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
                <li style={styles} className="nav-item">
                    <a className="nav-link" href="#resume">Resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;