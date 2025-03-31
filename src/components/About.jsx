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
    paragraph1: {
        fontSize: '1rem',
        marginTop: '1vw',
        textIndent: '45px',
        },
    paragraph2: {
        fontSize: '1rem',
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
                        <h2 style={styles.h2}>Full Stack Web Developer</h2>
                        <p style={styles.paragraph1}>
                            Full-stack web developer focused on intuitive design, business process support, high performance and security. Experienced in early stage startups, product-market fit and fundraising. I approach problem solving with business & technical rigor as well as creativity. The current times call for software developers to have technical expertise and to also have the business and people skills necessary to drive product development cross-functionally. Combining my experiences to support development teams is my passion!
                        <p style={styles.paragraph2}>
                            Feel free to explore my portfolio and resume! Thank you for taking the time.
                        </p>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default About;
