import React from 'react'
import '../styles/Home.css'
import avatar from '../assets/image/Avata.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { actions, useStore } from '../store';

function Home() {
  const [state, dispatch] = useStore();
  const { toggle } = state;

  React.useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className={toggle ? 'home-wrapper-light' : 'home-wrapper-dark'}>
      <div className='home-block'></div>
      <div className='home-image--block'>
        <img src={avatar} alt='Ảnh đại diện' data-aos='zoom-in-up' data-aos-duration='1000' />
      </div>
      <div className='home-desc' >
        <div className='home-desc--header'>
          <h1 className='home-desc--name' data-aos='fade-up' data-aos-duration='1000'>-- I'm Hoang The Luan.</h1>
          <h1 className='home-desc--job-light' data-aos='fade-up' data-aos-duration='1500'>Web Developer</h1>
        </div>
        <div className='home-desc--content-light'>
          <p data-aos='fade-up' data-aos-duration='2000'>
            I'm a Vietnamese based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
          </p>
        </div>
        <div className='home-button'>
          <Link to='/about'>
            <p data-aos='fade-up' data-aos-duration='2500'>MORE ABOUT ME <i class="fa fa-arrow-right"></i></p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home