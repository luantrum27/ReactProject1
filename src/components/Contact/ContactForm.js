import React from 'react'
import '../../styles/Contact.css'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';


function ContactForm() {
    React.useEffect(() => {
        AOS.init({duration: 2000});
    }, [])
    return (
        <>
            <div className='contact-content--right' data-aos='fade-up'>
                <form action='' method='post'>
                    <div className='group-input'>
                        <input type='text' name='name' placeholder='YOUR NAME' required/>
                        <input type='email' name='email' placeholder='YOUR EMAIL' required/>
                    </div>
                    <input type='text' style={{ marginTop: '30px' }} name='subject' placeholder='YOUR SUBJECT' required/> <br />
                    <textarea placeholder='YOUR MESSAGE' rows='10'></textarea>
                </form>
                <div className='contact-button'>
                    <Link to='/about'>
                        <p>SEND ME <i class="fa fa-send"></i></p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ContactForm