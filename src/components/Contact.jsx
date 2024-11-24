import logo from '../assets/images/jz-logo.png';

const styles = {
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3vw'
      },
    circle: {
        display: 'flex',
        flexDirection: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: '75vw',
        height: 'auto', 
        borderRadius: '3%', 
        overflowY: 'auto',
        overflowX: 'hidden',  
        padding: '1vw',
      },
    headshot: {
        borderRadius: '50%', 
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

function Contact() {
    return (
        <>
            <div style={styles.wrapper}>
                <div style={styles.circle} className='bg-danger bg-opacity-25' >
                    <div>
                        <img style={styles.headshot} src={logo} alt="logo"></img>
                    </div>
                    <div style={styles.div}>
                        <h2 style={styles.h2}>Who am I?</h2> 
                        <p style={styles.paragraph}>As a former molecular biologist, SaaS account executive and co-founder, I bring a unique set of skills and experiences to web development. This blend of technical and business skills helps me connect with customer UI/UX and business process needs while balancing the priorieties of your business. My experience working with both small, scrappy teams and large teams supporting Fortune 50 companies, has taught me the importance of clear communication, the spirit of collaboration and the importance of mentorship. Please have a look at my portfolio and resume. And, let me know if you have any questions! Thanks for stopping by!
                        </p>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default Contact;