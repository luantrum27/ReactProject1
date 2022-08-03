import React from 'react'
import '../../styles/About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Infomation() {
    React.useEffect(() => {
        AOS.init({duration: 2000});
    }, [])
    return (
        <>
            <div className='about-content' data-aos='fade-up'>
                <div className='about-content--info'>
                    <span className='about-content--title'>
                        <h2>PERSONAL INFOS</h2>
                    </span>
                    <div className='info-block'>
                        <div className='info-block--left'>
                            <p className='info'>First name: <span>Hoang</span></p>
                            <p className='info'>Age: <span>19</span></p>
                            <p className='info'>Freelance: <span>Available</span></p>
                            <p className='info'>Phone: <span>+84379124695</span></p>
                            <p className='info'>Facebook: <span>Hoàng Thế Luân</span></p>
                        </div>
                        <div className='info-block--right'>
                            <p className='info'>Last name: <span>The Luan</span></p>
                            <p className='info'>Nationality: <span>Vietnamese</span></p>
                            <p className='info'>Address: <span>Quang Tri</span></p>
                            <p className='info'>Email: <span>luanht.21it@vku.udn.vn</span></p>
                            <p className='info'>Language: <span>English</span></p>
                        </div>
                    </div>
                </div>
                <div className='about-content--param'>
                    <div className='param-block--item'>
                        <h1>2+</h1>
                        <span>--- YEARS OF EXPERIENCES</span>
                    </div>
                    <div className='param-block--item'>
                        <h1>20+</h1>
                        <span>--- COMPLETED PROJECT</span>
                    </div>
                    <div className='param-block--item'>
                        <h1>3+</h1>
                        <span>--- AWARDS WON</span>
                    </div>
                    <div className='param-block--item'>
                        <h1>15+</h1>
                        <span>--- HAPPY CUSTOMER</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Infomation