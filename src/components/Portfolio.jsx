import weather from '../assets/images/weatherApp.png';
import vehicle from '../assets/images/vehicleBuilder.png';
import markdown from '../assets/images/markdownGen.png';
import employee from '../assets/images/employeeTracker.png';
import mole from '../assets/images/mobileMole.png';



function Portfolio() {

const styles = {
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      },
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '44vw',
        height: '28vw',
        borderRadius: '2%', 
        margin: '1.5vw',
        padding: '1vw',
        overflow: 'auto',
        fontFamily: 'Roboto',
        justifyContent: 'center',

      },
    img: {
        display: 'block',
        width: '18vw',
        height: '18vw',
        borderRadius: '3%', 
        marginTop: '1vw'
    },
    divFormat: {
        display: 'flex',
        flexDirection: 'row',
    },
    linkFormat: {
        fontSize: '1.5vw',
        textAlign: 'center',
        margin: '1vw',
        color: 'white',
        textDecoration: 'none',
        fontFamily: 'Roboto',
    }
}
    
    return (
        <>
            <div style={styles.wrapper}>
                <div style={styles.box} className='bg-danger bg-opacity-25'>
                    <img style={styles.img} src={employee} alt="Employee Tracker Logo"></img>
                    <div style={styles.divFormat}>
                        <a style={styles.linkFormat} className="btn btn-default btn-work btn-primary" href="https://github.com/Jzaroli/Employee-Tracker_App" target="_blank" rel="noopener noreferrer">Github</a>
                        <a style={styles.linkFormat} className="btn btn-default btn-work btn-primary" href="https://github.com/Jzaroli" target="_blank" rel="noopener noreferrer">Demo</a>
                    </div>
                </div>
                <div style={styles.box} className='bg-danger bg-opacity-25'>
                    <img style={styles.img} src={weather} alt="Weather App Logo"></img>
                    <div style={styles.divFormat}>
                        <a style={styles.linkFormat} className="btn btn-default btn-work btn-primary" href="https://github.com/Jzaroli/Weather-API_App" target="_blank" rel="noopener noreferrer">Github</a> 
                        <a style={styles.linkFormat} className="btn btn-default btn-work btn-primary" href="https://weather-app-tx11.onrender.com/" target="_blank" rel="noopener noreferrer">Link</a>
                    </div>
                </div>
                <div style={styles.box} className='bg-danger bg-opacity-25'>
                    <img style={styles.img} src={markdown} alt="Markdown Generator Logo"></img>
                    <div style={styles.divFormat}>
                        <a style={styles.linkFormat} className="btn btn-default btn-work btn-primary" href="https://github.com/Jzaroli/MarkdownGenerator_App" target="_blank" rel="noopener noreferrer">Github</a> 
                        <a style={styles.linkFormat} className="btn btn-default btn-work btn-primary" href="https://github.com/Jzaroli" target="_blank" rel="noopener noreferrer">Demo</a>
                    </div>
                </div>
                <div style={styles.box} className='bg-danger bg-opacity-25'>
                    <img style={styles.img} src={vehicle} alt="Vehicle Builder Logo"></img>
                    <div style={styles.divFormat}>
                        <a style={styles.linkFormat} className="btn btn-default btn-work btn-primary" href="https://github.com/Jzaroli/Vehicle-Builder_OOP_App" target="_blank" rel="noopener noreferrer">Github</a> 
                        <a style={styles.linkFormat} className="btn btn-default btn-work btn-primary" href="https://github.com/Jzaroli" target="_blank" rel="noopener noreferrer">Demo</a>
                    </div>
                </div>
                <div style={styles.box} className='bg-danger bg-opacity-25'>
                    <img style={styles.img} src={mole} alt="Wackamole Game Logo"></img>
                    <div style={styles.divFormat}>
                        <a style={styles.linkFormat} className="btn btn-default btn-work btn-primary" href="https://github.com/Jzaroli/Wackamole-2.0_JS-Game" target="_blank" rel="noopener noreferrer">Github</a> 
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;