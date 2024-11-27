import logo from '../assets/images/jz-logo.png';
import { useState } from 'react';

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
    logo: {
        borderRadius: '50%', 
        height: '15vw',
        width: '15vw',
        margin: '2vw',
        },
    div: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        fontFamily: 'Roboto',
        boxSizing: 'border-box',
        textAlign: 'left',
        overflow: 'visible',
    },
    h2: {
        overflow: 'auto',
    },
    formDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    formInputs: {
        marginTop: '1vw',
        fontFamily: 'Roboto',
    },
    textArea: {
        marginTop: '1vw',
        fontFamily: 'Roboto',
        width: '40vw'
    },
    button: {
        fontSize: '1.6vw',
        textAlign: 'center',
        margin: '1vw',
        color: 'white',
        textDecoration: 'none',
        fontFamily: 'Roboto',
    }
    
}

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submited', formData);
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };
    
    
    return (
        <>
            <div style={styles.wrapper}>
                <div style={styles.circle} className='bg-danger bg-opacity-25' >
                    <div>
                        <img style={styles.logo} src={logo} alt="logo"></img>
                    </div>
                    <div style={styles.div}>
                        <h2 style={styles.h2}>Let's connect:</h2> 
                        <form onSubmit={handleFormSubmit}>
                            <div style={styles.formDiv} className="form-group">
                                <input
                                    style={styles.formInputs}
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Name"
                                    className="form-control"
                                />
                                <input
                                    style={styles.formInputs}
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email"
                                    className="form-control"
                                />
                                <textarea
                                    style={styles.textArea}
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Type your message here"
                                    className="form-control"
                                    rows="3"
                                />
                                <button style={styles.button} className="btn btn-default btn-work btn-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default ContactForm;