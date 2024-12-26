import headshot from '../assets/images/headshot2.jpg';

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1vw',
        textAlign: 'center',
      },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40vw',
        padding: '0.5rem',
        borderRadius: '3%',
        fontFamily: 'Roboto',
        marginBottom: '1.5vw',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    h1: {
        fontWeight: 'bold',
    },
    box2: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: '85vw',
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
        height: '15vw',
        width: '15vw',
        margin: '2vw',
    },
    div: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        fontFamily: 'Roboto',
        boxSizing: 'border-box',
        textAlign: 'left',
        overflow: 'visible',
    },
    h2: {
        overflow: 'auto',
        margin: '1vw',
    },
    paragraph: {
        fontSize: '1rem',
        margin: '1vw',
        }
}

function About() {
    return (
        <>
            <div style={styles.wrapper}>
                <div style={styles.box} className='bg-primary bg-opacity-25'>
                    <h1 style={styles.h1}>Johann Zaroli</h1>
                </div>
                <div style={styles.box2} className='bg-primary bg-opacity-25' >
                    <div>
                        <img style={styles.headshot} src={headshot} alt='headshot'></img>
                    </div>
                    <div style={styles.div}> 
                        <h2 style={styles.h2}>Full Stack Developer</h2>
                        <p style={styles.paragraph}>
                            As a software developer I focus on delivering solutions with intuitive design, business process sense and high performance. I pull from my STEM background to think logically and programmatically about solving algorithmic problems. And, from my fintech experience to empathize with customer needs, plan for costs and scalability as well as adapt to changing markets & technologies.  My experience working for both unicorn start-ups and large teams at leading software firms taught me the importance of clear communication, the spirit of collaboration and the joy of mentorship. Please have a look at my portfolio and resume. And, let me know in the contact section if you'd like to work together! Thank you for stopping by!
                        </p>
                    </div>
                </div>
            </div>        
        </>
    );
}

export default About;