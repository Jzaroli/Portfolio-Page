import headshot from '../assets/images/headshot2.jpg';

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem',
        textAlign: 'center',
      },
    box: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: '90vw',
        height: 'auto', 
        borderRadius: '3%', 
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '1vw',
        marginBottom: '1vw',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

      },
    headshot: {
        borderRadius: '50%', 
        boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
        height: '16vw',
        width: '16vw',
        margin: '2vw',
    },
    div1: {
        width: '20%',
    },
    div2: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        fontFamily: 'Roboto',
        boxSizing: 'border-box',
        textAlign: 'left',
        overflow: 'visible',
        padding: '1rem'
    },
    h1: {
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        width: '95%',
        textAlign: 'right',
        margin: '1vw',
        fontSize: '3.5vw'
    },
    h2: {
        overflow: 'auto',
        width: '95%',
        textAlign: 'right',
        marginLeft: '1vw',
        fontSize: '3vw'
    },
    paragraph: {
        fontSize: '1rem',
        margin: '1vw',
        textIndent: '45px',
        }
}

function About() {
    return (
        <>
            <div style={styles.wrapper}>
                <div style={styles.box} className='bg-primary bg-opacity-25' >
                    <div style={styles.div1}>
                        <img style={styles.headshot} src={headshot} alt='headshot'></img>
                    </div>
                    <div style={styles.div2}> 
                        <h1 style={styles.h1}>Johann Zaroli</h1>
                        <h2 style={styles.h2}>Software Developer</h2>
                        <p style={styles.paragraph}>
                        As a software developer, I specialize in delivering full-stack solutions that combine intuitive design, business process expertise, and high performance. Drawing from my STEM background, I approach algorithmic challenges with logical and programmatic thinking. My fintech experience helps me empathize with customer needs, plan for costs and scalability, and adapt to evolving markets and technologies. Having worked at both unicorn start-ups and leading software firms, I’ve learned the value of clear communication, the power of collaboration, and the joy of mentorship. Feel free to explore my portfolio and resume, and reach out through the contact section if you'd like to work together. Thank you for stopping by!
                        </p>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default About;