const styles = {
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: '2rem'
      },
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '85vw',
        height: 'auto', 
        borderRadius: '2%', 
        overflow: 'auto',
        padding: '2vw',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
    h2: {
        textDecoration: 'underline',
        fontWeight: '500'
      },
    sections: {
        fontFamily: 'Roboto',
        fontSize: '1rem',
        margin: '2vw'
      },
    li: {
        marginLeft: '0.5vw',
      },
    a: {
        textIndent: '2vw'
    },
    resume: {
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2vw',
        textAlign: 'center',
        color: 'white',
        textDecoration: 'none',
        fontFamily: 'Roboto',
        marginLeft: '1vw',
    }
}

function Resume() {
    return (
        <>
            <div style={styles.wrapper}>
                <div style={styles.box} className='bg-primary bg-opacity-25'>
                    <div style={styles.sections}> 
                        <h2 style= {styles.h2}>Skills</h2> 
                            <b>Back End Development</b> | Express 𑇐 Node.js 𑇐 Python 𑇐 PostgreSQL 𑇐 NoSQL 𑇐 MongoDB<br></br>
                            <b>Front End Development</b> | ReactJS 𑇐 JavaScript 𑇐 BootStrap 𑇐 HTML 𑇐 CSS <br></br>
                            <b>Miscellaneous Technical</b> | Typescript 𑇐 Prompt Engineering <br></br>
                            <b>Mathematics</b> | Statistics 𑇐 Calculus <br></br>
                            <b>Business</b> | Go-To-Market Strategy 𑇐 Sales 𑇐 Capital Markets 𑇐 Business Processes<br></br>
                            <b>Soft Skills</b> | Clear & Well-Spoken Communicator 𑇐 Team-player 𑇐 Mentorship<br></br>
                            <b>Languages</b> | French 𑇐 English<br></br>
                            <br></br>
                        <h2 style= {styles.h2}>Education</h2> 
                            <b>Certificate: Full Stack Coding Bootcamp</b> | Denver University <br></br>
                            <b>Master's in Molecular Biology</b> | San José State University 𑇐 3.6 GPA 𑇐 2013<br></br>
                            <div style={styles.a}>
                                <a className='text-primary' href='https://scholarworks.sjsu.edu/etd_theses/4324/' target='_blank' rel='noopener noreferrer'><b>Master's Thesis</b></a><br></br>
                            </div>
                            <b>Bachelors in Molecular Biology 𑇐 Minor in Chemistry</b> | San José State University 𑇐 3.3 GPA 𑇐 2011<br></br>
                            <br></br>
                        <h2 style= {styles.h2}>Awards</h2> 
                            <b>Basware, Inc.</b> | Team MVP Q4 2018<br></br>
                            <b>Basware, Inc.</b> | Top Inside Sales Team Member Q2 2018<br></br>
                            <b>Hewlett-Packard Enterprise</b> | Leading the Way<br></br>
                            <b>Hewlett-Packard Enterprise</b> | Stevie Award, Bronze<br></br>
                            <br></br>
                        <div style={styles.resume}>
                            <h2 style= {styles.h2}>Experience: </h2>
                            <a style={styles.button} className='btn btn-primary' href='https://drive.google.com/file/d/1u_tjZ72GuFOozzbNaVn-xFujCQSrQsPJ/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Resume</a> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resume;
