import github from '../assets/images/github-mark.png';
import linkedin from '../assets/images/In-White-72.png';

const styles = {
    footer: {
        position: 'static',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '4rem',
        padding: '0.25rem',
        marginTop: '1rem',
        textAlign: 'center',
    },
    logo: {
        height: '3.5rem',
        marginLeft: '1rem'
    }
}

function Footer () {
    return (
        <footer style={styles.footer} className='bg-primary bg-gradient'>
            <a  href='https://www.linkedin.com/in/johannzaroli/' target='_blank' rel='noopener noreferrer'>
                    <img style={styles.logo} src={linkedin} alt='LinkedIn Logo'></img>
            </a>
            <a href='https://github.com/Jzaroli' target='_blank' rel='noopener noreferrer'>
                    <img style={styles.logo} src={github} alt='GitHub Logo'></img>
            </a>
        </footer>
    )
}

export default Footer;