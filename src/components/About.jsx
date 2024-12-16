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
        width: '45vw',
        height: 'auto', 
        padding: '0.6vw',
        borderRadius: '3%',
        fontFamily: 'Roboto',
        marginBottom: '1.5vw'
    },
    box2: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: '75vw',
        height: 'auto', 
        borderRadius: '3%', 
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '1vw',
        marginBottom: '1vw'
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
                    <h1> <span className='fw-bold'>Johann Zaroli</span> <br></br> Full Stack Developer</h1>
                </div>
                <div style={styles.box2} className='bg-primary bg-opacity-25' >
                    <div>
                        <img style={styles.headshot} src={headshot} alt='headshot'></img>
                    </div>
                    <div style={styles.div}> 
                        <h2 style={styles.h2}>Who am I?</h2>
                        <p style={styles.paragraph}> Former molecular biologist, SaaS account executive and co-founder, bringing a unique set of skills and experiences to full stack development. This blend of technical and business skills connects me with customer UI/UX considerations, business process needs and system design considerations. Experiences working with both small, scrappy teams and large teams supporting Fortune 50 companies, taught me the importance of clear communication, the spirit of collaboration and the joy of mentorship. Please have a look at my portfolio and resume. And, let me know in the contact section if you'd like to work together! Thank you for stopping by!
                            </p>
                    </div>
                </div>
            </div>        
        </>
    );
}

export default About;