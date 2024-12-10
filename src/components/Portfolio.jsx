import weather from '../assets/images/weatherApp.png';
import candidate from '../assets/images/candidate.png';
import vehicle from '../assets/images/vehicleBuilder.png';
import markdown from '../assets/images/markdownGen.png';
import employee from '../assets/images/employeeTracker.png';
import mole from '../assets/images/mobileMole.png';
import portfolio from '../assets/images/portfolio.png';
import React, { useState } from "react";

function Portfolio() {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

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
        height: '29vw',
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
    },
    tooltipContainer: {
        position: "relative", 
        display: "inline-block",
        textAlign: "center",
      },
    tooltip: {
        position: "absolute",
        bottom: "90%",
        left: "50%",
        transform: "translateX(-50%)",
        fontFamily: 'Roboto',
        backgroundColor: "black",
        color: "white",
        padding: "5px 10px",
        borderRadius: "5px",
        whiteSpace: "nowrap",
        fontSize: "1vw",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
        zIndex: 10,
        visibility: isHovered ? "visible" : "hidden",
        opacity: isHovered ? 1 : 0, 
        transition: "opacity 0.3s ease", 
      },
}


    return (
        <>
            <div style={styles.wrapper}>
                <div style={styles.box} className='bg-primary bg-opacity-25'>
                    <img style={styles.img} src={candidate} alt="Candidate App Logo"></img>
                    <div style={styles.divFormat}>
                        <a style={styles.linkFormat} className="btn btn-default btn-work btn-primary" href="https://github.com/Jzaroli/Candidate-Search_App" target="_blank" rel="noopener noreferrer">Github</a> 
                        <div style={styles.tooltipContainer}>
                            <div style={styles.tooltip}>Render needs 60s to boot up!</div>
                            <a style={styles.linkFormat} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="btn btn-default btn-work btn-primary" href="https://candidate-search-app-ryre.onrender.com/" target="_blank" rel="noopener noreferrer">Link</a>
                        </div>
                    </div>
                </div>
                <div style={styles.box} className='bg-primary bg-opacity-25'>
                    <img style={styles.img} src={employee} alt="Employee Tracker Logo"></img>
                    <div style={styles.divFormat}>
                        <a style={styles.linkFormat} className="btn btn-default btn-work btn-primary" href="https://github.com/Jzaroli/Employee-Tracker_App" target="_blank" rel="noopener noreferrer">Github</a>
                        <a style={styles.linkFormat} className="btn btn-default btn-work btn-primary" href="https://drive.google.com/file/d/15JP-_EeoE1u1i_LH4n1hetNsgiJW7F-A/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Demo</a>
                    </div>
                </div>
                <div style={styles.box} className='bg-primary bg-opacity-25'>
                    <img style={styles.img} src={weather} alt="Weather App Logo"></img>
                    <div style={styles.divFormat}>
                        <a style={styles.linkFormat} className="btn btn-default btn-work btn-primary" href="https://github.com/Jzaroli/Weather-API_App" target="_blank" rel="noopener noreferrer">Github</a> 
                        <div style={styles.tooltipContainer}>
                            <div style={styles.tooltip}>Render needs 60s to boot up!</div>
                            <a style={styles.linkFormat} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="btn btn-default btn-work btn-primary" href="https://weather-app-tx11.onrender.com/" target="_blank" rel="noopener noreferrer">Link</a>
                        </div>
                    </div>
                </div>
                <div style={styles.box} className='bg-primary bg-opacity-25'>
                    <img style={styles.img} src={mole} alt="Wackamole Game Logo"></img>
                    <div style={styles.divFormat}>
                        <a style={styles.linkFormat} className="btn btn-default btn-work btn-primary" href="https://github.com/Jzaroli/Wackamole-2.0_JS-Game" target="_blank" rel="noopener noreferrer">Github</a> 
                    </div>
                </div>
                <div style={styles.box} className='bg-primary bg-opacity-25'>
                    <img style={styles.img} src={markdown} alt="Markdown Generator Logo"></img>
                    <div style={styles.divFormat}>
                        <a style={styles.linkFormat} className="btn btn-default btn-work btn-primary" href="https://github.com/Jzaroli/MarkdownGenerator_App" target="_blank" rel="noopener noreferrer">Github</a> 
                        <a style={styles.linkFormat} className="btn btn-default btn-work btn-primary" href="https://drive.google.com/file/d/1QwiuBvydKYRJa4Q51AqXuWEwYlpEEjr3/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Demo</a>
                    </div>
                </div>
                <div style={styles.box} className='bg-primary bg-opacity-25'>
                    <img style={styles.img} src={vehicle} alt="Vehicle Builder Logo"></img>
                    <div style={styles.divFormat}>
                        <a style={styles.linkFormat} className="btn btn-default btn-work btn-primary" href="https://github.com/Jzaroli/Vehicle-Builder_OOP_App" target="_blank" rel="noopener noreferrer">Github</a> 
                        <a style={styles.linkFormat} className="btn btn-default btn-work btn-primary" href="https://drive.google.com/file/d/1dmeb1nkwNFHpTZ6KcFl-7RF6idYyCoEi/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Demo</a>
                    </div>
                </div>
                <div style={styles.box} className='bg-primary bg-opacity-25'>
                    <img style={styles.img} src={portfolio} alt="Portfolio Logo"></img>
                    <div style={styles.divFormat}>
                        <a style={styles.linkFormat} className="btn btn-default btn-work btn-primary" href="https://github.com/Jzaroli/Portfolio-Page_React" target="_blank" rel="noopener noreferrer">Github</a> 
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;