import React from 'react'
import '../../styles/Contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactInfo() {
    React.useEffect(() => {
        AOS.init({duration: 2000});
    }, [])
    return (
        <>
            <div className='contact-content--left' data-aos='fade-up'>
                <h2>Don't be shy!</h2>
                <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <div className='contact-content--list'>
                    <div className='contact-content--item'>
                        <div className='contact-icon'>
                            <i class="fa fa-map position-absolute"></i>
                        </div>
                        <div className='contact-label'>
                            <p>ADDRESS POINT</p>
                        </div>
                        <div className='contact-label--desc'>
                            <p>Thon Ha Thuong, Xa Gio Chau, Huyen Gio Linh, Tinh Quang Tri.</p>
                        </div>
                    </div>
                    <div className='contact-content--item'>
                        <div className='contact-icon'>
                            <i class="fa fa-envelope-open position-absolute"></i>
                        </div>
                        <div className='contact-label'>
                            <p>EMAIL POINT</p>
                        </div>
                        <div className='contact-label--desc'>
                            <p>luanht.21it@vku.udn.vn</p>
                        </div>
                    </div>
                    <div className='contact-content--item'>
                        <div className='contact-icon'>
                            <i class="fa fa-phone-square position-absolute"></i>
                        </div>
                        <div className='contact-label'>
                            <p>PHONE ME</p>
                        </div>
                        <div className='contact-label--desc'>
                            <p>+84379124695</p>
                        </div>
                    </div>
                    <div className='contact-social--media'>
                        <li>
                            <a href='https://www.facebook.com/htluan2706'><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href='https://www.tiktok.com/@hoangluan_08'><i class="fa fa-tiktok"></i></a>
                        </li>
                        <li>
                            <a href='https://www.youtube.com/channel/UC-RNQWItwPTqkNfn90SNXWg'><i class="fa fa-youtube" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/htheluan/?hl=en'><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        </li>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactInfo