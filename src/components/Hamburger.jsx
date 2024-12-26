import { Link, useLocation } from 'react-router-dom';

function Hamburger({ isOpen }) {
    const currentPage = useLocation().pathname;

    const styles = {
        hamburger: {
            width: '2rem',
            height: '1.7rem',
            display: 'flex',
            justifyContent: 'space-around',
            flexFlow: 'column nowrap',
            zIndex: '10',
        },
        burger: {
            width: '2rem',
            height: '0.3rem',
            borderRadius: '10px',
            backgroundColor: 'black',
            transformOrigin: '8px',
            transition: 'all 0.3s linear'
        },
        frame: {
            position: 'absolute',
            top: '60px', /* Adjust to position below the hamburger icon */
            right: '20px', /* Off-center to the left */
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: '999', /* Ensure it overlays other elements */
            padding: '16px',
            width: '170px',
            height: '135px'
        },
        ul: {
            listStyle: 'none',
            fontWeight: 'bold',
            fontSize: '1rem'
        },
        li: {
            margin: '1px'
        }
    }

    return(
        <>
            <div style={styles.hamburger}>
                <div style={styles.burger} />
                <div style={styles.burger} />
                <div style={styles.burger} />
            </div>
            {
                !isOpen ? (
                    <></>
                  ) : (
                <div>
                    <div style={styles.frame}>
                        <ul style={styles.ul}>
                            <li style={styles.li}>
                                <Link
                                    to='/'
                                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                                >
                                    About
                                </Link>
                            </li>
                            <li style={styles.li}>
                                <Link
                                    to='/Portfolio'
                                    className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li style={styles.li}>
                                <Link
                                    to='/Resume'
                                    className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                                >
                                    Resume
                                </Link>
                            </li>
                            <li style={styles.li}>
                                <Link
                                    to='/Contact'
                                    className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}

export default Hamburger;