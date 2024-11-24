const styles = {
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
    box1: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '47vw',
        height: 'auto', 
        borderRadius: '2%', 
        margin: '1.5vw',
        overflow: 'auto',
        padding: '1vw'
      },
    box2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '47vw',
        height: 'auto', 
        borderRadius: '2%', 
        margin: '1.5vw',
        overflow: 'auto',
        padding: '1vw'
      },
    h2: {
        textDecoration: 'underline',
        fontWeight: '500'
      },
    paragraph: {
        fontFamily: 'Roboto',
        fontSize: '1rem',
        margin: '2vw'
      },
    li: {
        marginLeft: '0.5vw',
      }
}

function Resume() {
    return (
        <>
            <div style={styles.wrapper}>
                <div style={styles.box1} className='bg-danger bg-opacity-25'>
                    <p style={styles.paragraph}> 
                        <h2 style= {styles.h2}>Skills</h2> 
                            <b>Back End Development</b> | Express 𑇐 Node.js 𑇐 Python 𑇐 PostgreSQL <br></br>
                            <b>Front End Development</b> | ReactJS 𑇐 JavaScript 𑇐 BootStrap 𑇐 HTML 𑇐 CSS <br></br>
                            <b>Miscellaneous</b> | Typescript 𑇐 Prompt Engineering <br></br>
                            <b>Mathematics</b> | Statistics 𑇐 Calculus <br></br>
                            <b>Business</b> | Go-To-Market Strategy 𑇐 Sales 𑇐 Financial Markets 𑇐 Business Processes<br></br>
                            <b>Soft Skills</b> | Clear & well-spoken communicator 𑇐 Team-player 𑇐 Mentorship<br></br>
                            <br></br>
                        <h2 style= {styles.h2}>Education</h2> 
                            <b>Certificate: Full Stack Coding Bootcamp</b> | Denver University <br></br>
                            <b>Master's in Molecular Biology</b> | San José State University 𑇐 3.6 GPA 𑇐 2013<br></br>
                            <b>Bachelor's in Molecular Biology 𑇐 Minor in Chemistry</b> | San José State University 𑇐 3.3 GPA 𑇐 2011<br></br>
                            <br></br>
                        <h2 style= {styles.h2}>Awards</h2> 
                            <b>Basware, Inc.</b> | Team MVP Q4 2018<br></br>
                            <b>Basware, Inc.</b> | Top Inside Sales Team Member Q2 2018<br></br>
                            <b>Hewlett-Packard Enterprise</b> | Leading the Way<br></br>
                            <b>Hewlett-Packard Enterprise</b> | Stevie Award, Bronze<br></br>
                    </p>
                </div>
                <div style={styles.box2} className='bg-danger bg-opacity-25'>
                     <p style={styles.paragraph}> 
                        <h2 style= {styles.h2}>Experience</h2> 
                            <b>MDF Commerce | Sr. Account Executive</b> | April - Oct 2024 | Generated ~$907K in pipeline.<br></br>
                            <b>Oro Labs, Inc | Sr. Account Executive</b> | 2022 - 2024
                                <ul>
                                    <li style={styles.li}>Intial sales hire for Series A startup | Signed customers included mid-market tech and global pharmaceutical companies.<br></br> Helped grow the company for a $34M series B round. </li>
                                    <li style={styles.li}>Led sales operations roll-out for the company, including selecting and implementing SalesForce, Outreach, ZoomInfo, Lusha and Gong.</li>
                                    <li style={styles.li}>Mentored colleagues across sales, sales ops, procurement/supply chain and soft skills.</li>
                                </ul>
                            <b>Kondor, Inc | Co-Founder/CEO</b> | 2021 - 2022
                                <ul>
                                    <li style={styles.li}>Kondor was an autonomous waste retrieval drone project  with the mission to optimize the waste stream and team-members from Amazon, Tesla, ABB, and Waste Management.</li>
                                    <li style={styles.li}>Led company initiatives from waste industry market analysis, proof of concept development, market fit validation, HR and legal dealings, as well as pitching and socializing the company with the venture capital community.</li>
                                    <li style={styles.li}>Conclusion: Venture capitalist feedback was overall positive. $500K of additional capital was needed to gather the KPIs they wanted. R&D costs were deemed too high to continue.</li>
                                </ul>
                            <b>SAP | Sr. Account Executive</b> | 2019 - 2021
                                <ul>
                                    <li style={styles.li}>$7.6M total contracts value sold in Oil & Gas, Tech and Consumer Products; Quota attainment.</li>
                                </ul>
                            <b>Basware, Inc. | Business Development Manager</b> | 2017 - 2019
                                <ul>
                                    <li style={styles.li}>Quota attainment | Responsible for sales automation and sales ops projects with Outreach.IO, marketing events and marketing nurture campaigns.</li>
                                </ul>
                            <b>AppZen | Sr. Account Executive</b> | 2016 - 2017
                                <ul>
                                    <li style={styles.li}>Ninth employee, worked on go-to-market strategy, product-market fit and process optimizations with the CMO, CTO and CEO.</li>
                                    <li style={styles.li}>$1.6M Total Contract Value Sold including new business with 2 of 4 first F500 customers plus several more F2000s, helping AppZen raise its $13M Series A. </li>
                                </ul>
                            <b>Hewlett-Packard Enterprise | Technical Engagement Manager</b> | 2014 - 2016
                                <ul>
                                    <li style={styles.li}>Top Performer: Closed 1/3 of Fortify on Demand's new logos for fiscal '15; Quota attainment.</li>
                                    <li style={styles.li}>Helped form a new inside sales team within the larger HP Software business unit, working cross-functionally with business unit leaders, three product teams and two marketing teams. Helped with go-to-market strategy with stakeholders of the Fortify-on-Demand product.</li>
                                </ul>
                            <b>WhiteHat Security</b> | 2013 - 2014
                                <ul>
                                    <li style={styles.li}><b>Customer Support Engineer II:</b> Promoted to customer success team for technical escalations with Tier 1 accounts. | Set up remote/satellite scanners and learned command line use.</li>
                                    <li style={styles.li}><b>Application Security Specialist:</b> Dynamic web application security testing with OWASP Top 10 software security vulnerabilities as well as technical support with customers.</li>
                                </ul>
                            <b>San José State University |  Molecular Biology Research Scientist</b> | 2010 - 2013
                                <ul>
                                    <li style={styles.li}>Developmental Neurogenetics: Led study on investigating molecular/genetic pathways that affect neural development in the PHB sensory neuron in C. elegans. Used split GFP based inter-synaptic markers and RFP markers to study synaptic specificity and axon outgrowth in vivo. Statistical Analysis conducted in R.</li>
                                    <li style={styles.li}><a href="https://scholarworks.sjsu.edu/etd_theses/4324/" target="_blank" rel="noopener noreferrer"><b>Master's Thesis</b></a></li>
                                </ul>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Resume;