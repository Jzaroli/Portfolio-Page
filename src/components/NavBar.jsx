import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/jz-logo-simple.png';
import '../assets/css/NavBar.css'


const styles = {
    nav: {
        alignItems: 'flex-start',    
        margin: '0.3rem',
        textAlign: 'center',
        fontSize: '5vh',
        maxHeight: '8vw'
    },
    ul: {
        display: 'flex',
        flexWrap: 'wrap',  
        flexDirection: 'row',
    },
    logo: {
         height: '9vh',
         textAlign: 'center',
         margin: '0.3rem',
         marginLeft: '0.5rem'
        }
}

function NavBar() {
    const currentPage = useLocation().pathname;

    return (
        <nav className="navbar navbar-expand-sm navbar-light">
            <img style={styles.logo} src={logo} alt="JZ logo"></img>
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