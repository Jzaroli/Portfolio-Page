import weather from '../assets/images/weatherApp.png';
import candidate from '../assets/images/candidate.png';
import vehicle from '../assets/images/vehicleBuilder.png';
import markdown from '../assets/images/markdownGen.png';
import employee from '../assets/images/employeeTracker.png';
import mole from '../assets/images/mobileMole.png';
import portfolio from '../assets/images/portfolio.png';
import React, { useState } from 'react';
import '../assets/css/Portfolio.css'

function Portfolio() {
    // Manages state for Candidate button:
    const [isHovered0, setIsHovered0] = useState(false);
    const handleMouseEnter0 = () => setIsHovered0(true);
    const handleMouseLeave0 = () => setIsHovered0(false);

    // Manages state for Weather button:
    const [isHovered1, setIsHovered1] = useState(false);
    const handleMouseEnter1 = () => setIsHovered1(true);
    const handleMouseLeave1 = () => setIsHovered1(false);

    // Manages state for Candidate Details:
    const [isHovered2, setIsHovered2] = useState(false);
    const handleMouseEnter2 = () => setIsHovered2(true);
    const handleMouseLeave2 = () => setIsHovered2(false);

    // Manages state for Employee Details:
    const [isHovered3, setIsHovered3] = useState(false);
    const handleMouseEnter3 = () => setIsHovered3(true);
    const handleMouseLeave3 = () => setIsHovered3(false);

    // Manages state for Weather Details:
    const [isHovered4, setIsHovered4] = useState(false);
    const handleMouseEnter4 = () => setIsHovered4(true);
    const handleMouseLeave4 = () => setIsHovered4(false);

    // Manages state for Mole Details:
    const [isHovered5, setIsHovered5] = useState(false);
    const handleMouseEnter5 = () => setIsHovered5(true);
    const handleMouseLeave5 = () => setIsHovered5(false);

    // Manages state for Markdown Details:
    const [isHovered6, setIsHovered6] = useState(false);
    const handleMouseEnter6 = () => setIsHovered6(true);
    const handleMouseLeave6 = () => setIsHovered6(false);

    // Manages state for Vehicle Details:
    const [isHovered7, setIsHovered7] = useState(false);
    const handleMouseEnter7 = () => setIsHovered7(true);
    const handleMouseLeave7 = () => setIsHovered7(false);

    // Manages state for Portfolio Details:
    const [isHovered8, setIsHovered8] = useState(false);
    const handleMouseEnter8 = () => setIsHovered8(true);
    const handleMouseLeave8 = () => setIsHovered8(false);

    const styles = {
        wrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            marginTop: '2rem'
        },
        box: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
            borderRadius: '2%', 
            marginLeft: '1vw',
            marginRight: '1vw',
            marginBottom: '2vw',
            padding: '1vw',
            overflow: 'auto',
            fontFamily: 'Roboto',
            justifyContent: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        },
        img: {
            display: 'block',
            borderRadius: '3%', 
            marginTop: '1vw'
        },
        divFormat: {
            display: 'flex',
            flexDirection: 'row',
            marginTop: '0.5vw'
        },
        linkFormat: {
            fontSize: '2vw',
            textAlign: 'center',
            margin: '1vw',
            color: 'white',
            textDecoration: 'none',
            fontFamily: 'Roboto'
        },
        tooltipContainer: {
            position: 'relative', 
            display: 'inline-block',
            textAlign: 'center'
        },
        tooltipCand: {
            position: 'absolute',
            bottom: '90%',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'Roboto',
            backgroundColor: 'black',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            whiteSpace: 'nowrap',
            fontSize: '1vw',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
            zIndex: 10,
            visibility: isHovered0 ? 'visible' : 'hidden',
            opacity: isHovered0 ? 0.9 : 0, 
            transition: 'opacity 0.3s ease',
        },
        tooltipWeather: {
            position: 'absolute',
            bottom: '90%',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'Roboto',
            backgroundColor: 'black',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            whiteSpace: 'nowrap',
            fontSize: '1vw',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
            zIndex: 10,
            visibility: isHovered1 ? 'visible' : 'hidden',
            opacity: isHovered1 ? 0.9 : 0, 
            transition: 'opacity 0.3s ease'
        },
        detailsCand: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            borderRadius: '2%', 
            fontFamily: 'Roboto',
            backgroundColor: 'black',
            color: 'white',
            fontSize: '1vw',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
            zIndex: 10,
            pointerEvents: 'none',
            display: isHovered2 ? 'flex' : 'none',
            opacity: isHovered2 ? 0.9 : 0, 
            transition: 'opacity 0.3s ease-in-out',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        },
        detailsEmp: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            borderRadius: '2%', 
            fontFamily: 'Roboto',
            backgroundColor: 'black',
            color: 'white',
            fontSize: '1vw',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
            zIndex: 10,
            pointerEvents: 'none',
            display: isHovered3 ? 'flex' : 'none',
            opacity: isHovered3 ? 0.9 : 0, 
            transition: 'opacity 0.3s ease-in-out',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        },
        detailsWeather: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            borderRadius: '2%', 
            fontFamily: 'Roboto',
            backgroundColor: 'black',
            color: 'white',
            fontSize: '1vw',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
            zIndex: 10,
            pointerEvents: 'none',
            display: isHovered4 ? 'flex' : 'none',
            opacity: isHovered4 ? 0.9 : 0, 
            transition: 'opacity 0.3s ease-in-out',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        },
        detailsMole: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            borderRadius: '2%', 
            fontFamily: 'Roboto',
            backgroundColor: 'black',
            color: 'white',
            fontSize: '1vw',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
            zIndex: 10,
            pointerEvents: 'none',
            display: isHovered5 ? 'flex' : 'none',
            opacity: isHovered5 ? 0.9 : 0, 
            transition: 'opacity 0.3s ease-in-out',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        },
        detailsMarkdown: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            borderRadius: '2%', 
            fontFamily: 'Roboto',
            backgroundColor: 'black',
            color: 'white',
            fontSize: '1vw',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
            zIndex: 10,
            pointerEvents: 'none',
            display: isHovered6 ? 'flex' : 'none',
            opacity: isHovered6 ? 0.9 : 0, 
            transition: 'opacity 0.3s ease-in-out',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        },
        detailsVehicle: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            borderRadius: '2%', 
            fontFamily: 'Roboto',
            backgroundColor: 'black',
            color: 'white',
            fontSize: '1vw',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
            zIndex: 10,
            pointerEvents: 'none',
            display: isHovered7 ? 'flex' : 'none',
            opacity: isHovered7 ? 0.9 : 0, 
            transition: 'opacity 0.3s ease-in-out',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        },
        detailsPortfolio: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            borderRadius: '2%', 
            fontFamily: 'Roboto',
            backgroundColor: 'black',
            color: 'white',
            fontSize: '1vw',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
            zIndex: 10,
            pointerEvents: 'none',
            display: isHovered8 ? 'flex' : 'none',
            opacity: isHovered8 ? 0.9 : 0, 
            transition: 'opacity 0.3s ease-in-out',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        },
        h2: {
            fontSize: '1.5vw'
        },
        p: {
            fontSize: '1.1vw',
            marginTop: '1vw',
            fontStyle: 'italic'
        }
    }


    return (
        <>
            <div style={styles.wrapper}>
                <div style={styles.box} className='box bg-primary bg-opacity-25'>
                    <div style={styles.detailsCand}>
                        <h2 style={styles.h2}>Tinder for finding engineers on GitHub!</h2>
                        <p style={styles.p}>Stack: React.js, TypeScript, Bootstrap and the GitHub API.</p>
                    </div>
                    <img style={styles.img} className='image' src={candidate} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} alt='Candidate App Logo'></img>
                    <div style={styles.divFormat}>
                        <a style={styles.linkFormat} className='btn btn-default btn-work btn-primary' href='https://github.com/Jzaroli/Candidate-Search_App' target='_blank' rel='noopener noreferrer'>Github</a> 
                        <div style={styles.tooltipContainer}>
                            <div style={styles.tooltipCand}>Render needs 60s to boot up!</div>
                            <a style={styles.linkFormat} onMouseEnter={handleMouseEnter0} onMouseLeave={handleMouseLeave0} className='btn btn-default btn-work btn-primary' href='https://candidate-search-app-ryre.onrender.com/' target='_blank' rel='noopener noreferrer'>Link</a>
                        </div>
                    </div>
                </div>
                <div style={styles.box} className='box bg-primary bg-opacity-25'>
                    <div style={styles.detailsEmp}>
                        <h2 style={styles.h2}>An HR app for small businesses!</h2>
                        <p style={styles.p}>Stack: Node.js, PostgreSQL and TypeScript.</p>
                    </div>
                    <img style={styles.img} className='image' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} src={employee} alt='Employee Tracker Logo'></img>
                    <div style={styles.divFormat}>
                        <a style={styles.linkFormat} className='btn btn-default btn-work btn-primary' href='https://github.com/Jzaroli/Employee-Tracker_App' target='_blank' rel='noopener noreferrer'>Github</a>
                        <a style={styles.linkFormat} className='btn btn-default btn-work btn-primary' href='https://drive.google.com/file/d/15JP-_EeoE1u1i_LH4n1hetNsgiJW7F-A/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>Demo</a>
                    </div>
                </div>
                <div style={styles.box} className='box bg-primary bg-opacity-25'>
                    <div style={styles.detailsWeather}>
                        <h2 style={styles.h2}>Look up the weather anywhere and save your favorites!</h2>
                        <p style={styles.p}>Stack: TypeScript, OOD, CSS and the openweathermap.org API.</p>
                    </div>
                    <img style={styles.img} className='image' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4} src={weather} alt='Weather App Logo'></img>
                    <div style={styles.divFormat}>
                        <a style={styles.linkFormat} className='btn btn-default btn-work btn-primary' href='https://github.com/Jzaroli/Weather-API_App' target='_blank' rel='noopener noreferrer'>Github</a> 
                        <div style={styles.tooltipContainer}>
                            <div style={styles.tooltipWeather}>Render needs 60s to boot up!</div>
                            <a style={styles.linkFormat} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className='btn btn-default btn-work btn-primary' href='https://weather-app-tx11.onrender.com/' target='_blank' rel='noopener noreferrer'>Link</a>
                        </div>
                    </div>
                </div>
                <div style={styles.box} className='box bg-primary bg-opacity-25'>
                    <div style={styles.detailsMole}>
                        <h2 style={styles.h2}>A fun, front-end based game of whack-a-mole!</h2>
                        <p style={styles.p}>Stack: Vanilla JS and Bootstrap.</p>
                    </div>
                    <img style={styles.img} className='image' onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5} src={mole} alt='Wackamole Game Logo'></img>
                    <div style={styles.divFormat}>
                        <a style={styles.linkFormat} className='btn btn-default btn-work btn-primary' href='https://github.com/Jzaroli/Wackamole-2.0_JS-Game' target='_blank' rel='noopener noreferrer'>Github</a> 
                    </div>
                </div>
                <div style={styles.box} className='box bg-primary bg-opacity-25'>
                    <div style={styles.detailsMarkdown}>
                        <h2 style={styles.h2}>Quickly generate a markdown template for your projects!</h2>
                        <p style={styles.p}>Stack: Node.js and the NPM Inquirer package.</p>
                    </div>
                    <img style={styles.img} className='image' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6} src={markdown} alt='Markdown Generator Logo'></img>
                    <div style={styles.divFormat}>
                        <a style={styles.linkFormat} className='btn btn-default btn-work btn-primary' href='https://github.com/Jzaroli/MarkdownGenerator_App' target='_blank' rel='noopener noreferrer'>Github</a> 
                        <a style={styles.linkFormat} className='btn btn-default btn-work btn-primary' href='https://drive.google.com/file/d/1QwiuBvydKYRJa4Q51AqXuWEwYlpEEjr3/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>Demo</a>
                    </div>
                </div>
                <div style={styles.box} className='box bg-primary bg-opacity-25'>
                    <div style={styles.detailsVehicle}>
                        <h2 style={styles.h2}>An interactive CLI vehicle builder!</h2>
                        <p style={styles.p}>Stack: TypeScript, OOD, Node.js</p>
                    </div>
                    <img style={styles.img} className='image' onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7} src={vehicle} alt='Vehicle Builder Logo'></img>
                    <div style={styles.divFormat}>
                        <a style={styles.linkFormat} className='btn btn-default btn-work btn-primary' href='https://github.com/Jzaroli/Vehicle-Builder_OOP_App' target='_blank' rel='noopener noreferrer'>Github</a> 
                        <a style={styles.linkFormat} className='btn btn-default btn-work btn-primary' href='https://drive.google.com/file/d/1dmeb1nkwNFHpTZ6KcFl-7RF6idYyCoEi/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>Demo</a>
                    </div>
                </div>
                <div style={styles.box} className='box bg-primary bg-opacity-25'>
                    <div style={styles.detailsPortfolio}>
                        <h2 style={styles.h2}>My Portfolio</h2>
                        <p style={styles.p}>Stack: React.js, Bootstrap and Formspree.</p>
                    </div>
                    <img style={styles.img} className='image' onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8} src={portfolio} alt='Portfolio Logo'></img>
                    <div style={styles.divFormat}>
                        <a style={styles.linkFormat} className='btn btn-default btn-work btn-primary' href='https://github.com/Jzaroli/Portfolio-Page_React' target='_blank' rel='noopener noreferrer'>Github</a> 
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;