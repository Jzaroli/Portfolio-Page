import NavBar from './NavBar.jsx';

const styles = {
    header: {
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        padding: '0.2rem',
        fontFamily: 'Roboto',
        fontSize: '1.4rem'
    },
}

function Header () {
    return (
        <header style={styles.header} className="bg-primary bg-opacity-75 bg-gradient">
            <NavBar />
        </header>
    )
}

export default Header;