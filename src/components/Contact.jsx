import logo from '../assets/images/jz-logo.png';
import { useForm } from '@formspree/react';
import React, { useState } from 'react';

const styles = {
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem',
      },
    box: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: '85vw',
        height: 'auto', 
        borderRadius: '3%', 
        overflowY: 'auto',
        overflowX: 'hidden',  
        padding: '1vw',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
    box2: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        width: '85vw',
        height: 'auto', 
        borderRadius: '3%', 
        overflowY: 'auto',
        overflowX: 'hidden',  
        padding: '1vw',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      },
    div2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Roboto',
        boxSizing: 'border-box',
        overflow: 'visible',
        position: 'relative',
        width: '95%',
        borderRadius: '3%', 
    },
    formDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    formInputs: {
        marginTop: '1vw',
        fontFamily: 'Roboto',
        fontSize: '2vw',

    },
    textArea: {
        marginTop: '1vw',
        fontFamily: 'Roboto',
        width: '54vw',
        fontSize: '2vw',

    },
    button: {
        textAlign: 'center',
        margin: '1.5vw',
        color: 'white',
        textDecoration: 'none',
        fontFamily: 'Roboto',
        fontSize: '2vw'
    },
    h2: {
        fontSize: '4vw',
        padding: '1vw'
    }
}

function ContactForm() {
    const [formValues, setFormValues] = useState({ name: '', email: '', message: '' }); 
    const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' }); 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    
    const [state, handleSubmit] = useForm('xgvenykr'); 

    const handleInputChange = (e) => { 
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
        if (value && formErrors[name]) {
            setFormErrors((prev) => ({ ...prev, [name]: '' }));
          }
        if (name === 'email' && value && !emailRegex.test(value)) {
        setFormErrors((prev) => ({ ...prev, email: 'Invalid email address.' }));
        }
    };

    const handleInputBlur = (e) => { 
        const { name, value } = e.target;
        const fieldName = name.charAt(0).toUpperCase() + name.slice(1);

        if (!value) {
          setFormErrors((prev) => ({ ...prev, [name]: `${fieldName} is required.` }));
        }
      };

    if (state.succeeded) {
        return  <>
        <div style={styles.wrapper}>
            <div style={styles.box2} className='bg-primary bg-opacity-25' >
                <div>
                    <img style={styles.logo} src={logo} alt='logo'></img>
                </div>
                <div style={styles.div2}>
                    <h2 style={styles.h2}>Thanks for reaching out!<br></br> I'll be in touch soon.</h2> 
                </div>
            </div>
        </div>  
    </>
    }
    return (
        <>
            <div style={styles.wrapper}>
                <div style={styles.box} className='bg-primary bg-opacity-25' >
                    <div>
                        <img style={styles.logo} src={logo} alt='logo'></img>
                    </div>
                    <div style={styles.div}>
                        <h2 style={styles.h2}>Let's connect:</h2> 
                        <form onSubmit={handleSubmit}>
                            <div style={styles.formDiv} className='form-group'>
                                <input
                                    style={styles.formInputs}
                                    type='text'
                                    id='name'
                                    name='name'
                                    placeholder='Name'
                                    className='form-control'
                                    value={formValues.name} 
                                    onChange={handleInputChange} 
                                    onBlur={handleInputBlur} 
                                />
                                    {formErrors.name && <p style={{ color: 'red', marginLeft: '0.3vw' }}>{formErrors.name}</p>}

                                <input
                                    style={styles.formInputs}
                                    type='email'
                                    id='email'
                                    name='email'
                                    placeholder='Email'
                                    className='form-control'
                                    value={formValues.email} 
                                    onChange={handleInputChange} 
                                    onBlur={handleInputBlur} 
                                />
                                    {formErrors.email && <p style={{ color: 'red', marginLeft: '0.3vw' }}>{formErrors.email}</p>}
                                <textarea
                                    style={styles.textArea}
                                    id='message'
                                    name='message'
                                    placeholder='Type your message here..'
                                    className='form-control'
                                    rows='3'
                                    value={formValues.message} 
                                    onChange={handleInputChange} 
                                    onBlur={handleInputBlur} 
                                />
                                {formErrors.message && <p style={{ color: 'red', marginLeft: '0.3vw' }}>{formErrors.message}</p>}
                                <button style={styles.button} className='btn btn-default btn-work btn-primary' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default ContactForm;