import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/jz-logo-simple.png';

const styles = {
    nav: {
        margin: '0.3rem',
        textAlign: 'center',
        fontSize: '5.2vh'
    },
    logo: {
         height: '9vh',
         textAlign: 'center',
         margin: '0.3rem'
        }
}

function NavBar() {
    const currentPage = useLocation().pathname;

    return (
        <nav className="navbar navbar-expand-sm navbar-light">
            <img style={styles.logo} src={logo} alt="GitHub Logo"></img>
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto align-items-center justify-content-between">
                <li style={styles.nav} className="nav-item">
                    <Link
                        to='/'
                        className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </Link>
                </li>
                <li style={styles.nav} className="nav-item">
                    <Link
                        to='/Portfolio'
                        className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </Link>
                </li>
                <li style={styles.nav} className="nav-item">
                    <Link
                        to='/Resume'
                        className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </Link>
                </li>
                <li style={styles.nav} className="nav-item">
                    <Link
                        to='/Contact'
                        className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </Link>
                
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;

{/* <li style={styles.nav} className="nav-item">
                    <a className="nav-link" href="#aboutme">About Me</a>
                </li>
                <li style={styles.nav} className="nav-item">
                    <a className="nav-link" href="#portfolio">Portfolio</a>
                </li>
                <li style={styles.nav} className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
                <li style={styles.nav} className="nav-item">
                    <a className="nav-link" href="#resume">Resume</a>
                </li> */}