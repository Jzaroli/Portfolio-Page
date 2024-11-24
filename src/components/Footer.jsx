import github from '../assets/images/github-mark.png';
import linkedin from '../assets/images/In-White-72.png';

const styles = {
    footer: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '4rem',
        padding: '0.4rem',
        textAlign: 'center',
        marginTop: '1vw'
    },
    logo: {
        height: '8vh',
        marginLeft: '1rem'
    }
}

function Footer () {
    return (
        <footer style={styles.footer} className="bg-primary bg-opacity-75 bg-gradient">
            <a  href="https://www.linkedin.com/in/johannzaroli/">
                    <img style={styles.logo} src={linkedin} alt="LinkedIn Logo"></img>
            </a>
            <a href="https://github.com/Jzaroli">
                    <img style={styles.logo} src={github} alt="GitHub Logo"></img>
            </a>
        </footer>
    )
}

export default Footer;