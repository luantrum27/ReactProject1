import React from 'react'
import '../../styles/Portifolio.css'
import item1 from '../../assets/image/item1.jpg'
import item2 from '../../assets/image/item2.jpg'
import item3 from '../../assets/image/item3.jpg'
import item4 from '../../assets/image/item4.jpg'
import item5 from '../../assets/image/item5.jpg'
import item6 from '../../assets/image/item6.jpg'
import item7 from '../../assets/image/item7.jpg'
import item8 from '../../assets/image/item8.jpg'
import item9 from '../../assets/image/item9.jpg'
import Popup from './Popup'
import { actions, useStore } from '../../store';
import AOS from 'aos';
import 'aos/dist/aos.css';

function PortfolioList() {
    const [state, dispatch] = useStore();
    const { popup } = state;

    console.log('popup: ', popup);

    const handleToggle = () => {
        dispatch(actions.setPopup(!popup))
    }

    React.useEffect(() => {
        AOS.init();
    }, [])
    
    return (
        <div className='portifolio-content-list'>
            <div className='portifolio-content-item' data-aos='fade-right' data-aos-duration='1000'>
                <img src={item1} alt=''/>
                <span className='portfolio-coating' onClick={handleToggle}><p className='portfolio-coating--text'>Mockup Project</p></span>
            </div>
            <div className='portifolio-content-item' data-aos='fade-right' data-aos-duration='1500' onClick={handleToggle}>
                <img src={item2} alt='' />
                <span className='portfolio-coating'><p className='portfolio-coating--text'>Youtube Project</p></span>
            </div>
            <div className='portifolio-content-item' data-aos='fade-right' data-aos-duration='2000' onClick={handleToggle}>
                <img src={item3} alt='' />
                <span className='portfolio-coating'><p className='portfolio-coating--text'>Slide Project</p></span>
            </div>
            <div className='portifolio-content-item' data-aos='fade-right' data-aos-duration='1000' onClick={handleToggle}>
                <img src={item4} alt='' />
                <span className='portfolio-coating'><p className='portfolio-coating--text'>Local Project</p></span>
            </div>
            <div className='portifolio-content-item' data-aos='fade-right' data-aos-duration='1500' onClick={handleToggle}>
                <img src={item5} alt='' />
                <span className='portfolio-coating'><p className='portfolio-coating--text'>Youtube Project</p></span>
            </div>
            <div className='portifolio-content-item' data-aos='fade-right' data-aos-duration='2000' onClick={handleToggle}>
                <img src={item6} alt='' />
                <span className='portfolio-coating'><p className='portfolio-coating--text'>Mockup Project</p></span>
            </div>
            <div className='portifolio-content-item' data-aos='fade-right' data-aos-duration='1000' onClick={handleToggle}>
                <img src={item7} alt='' />
                <span className='portfolio-coating'><p className='portfolio-coating--text'>Facebook Project</p></span>
            </div>
            <div className='portifolio-content-item' data-aos='fade-right' data-aos-duration='1500' onClick={handleToggle}>
                <img src={item8} alt='' />
                <span className='portfolio-coating'><p className='portfolio-coating--text'>Tiktok Project</p></span>
            </div>
            <div className='portifolio-content-item' data-aos='fade-right' data-aos-duration='2000' onClick={handleToggle}>
                <img src={item9} alt='' />
                <span className='portfolio-coating'><p className='portfolio-coating--text'>Local Project</p></span>
            </div>
            {
                popup && <Popup title='Video' project='website' client='The Luan' language='HTML, CSS, Javascript' preview='http://localhost:3000'/>
            }
            
        </div>
    )
}

export default PortfolioList