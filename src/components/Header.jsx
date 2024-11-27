import NavBar from './NavBar.jsx';

const styles = {
    header: {
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        padding: '0.3vw',
        fontFamily: 'Roboto',
        fontSize: '1.4rem',
    }
}

function Header () {
    return (
        <header style={styles.header} className="bg-primary bg-gradient">
            <NavBar />
        </header>
    )
}

export default Header;