import React from 'react'
import '../../styles/About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function MySkills() {
    React.useEffect(() => {
        AOS.init({duration: 2000});
    }, [])
    
    return (
        <>
            <div className='about-wrapper' data-aos='fade-up'>
                <h2>MY SKILLS</h2>
                <div className='about-chart--list'>
                    <div className='about-chart--item' id='html'>
                        <div className='about-chart'>
                            <p>85%</p>
                        </div>
                        <div className='about-chart--text'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                    <div className='about-chart--item' id='css'>
                        <div className='about-chart'>
                            <p>95%</p>
                        </div>
                        <div className='about-chart--text'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                    <div className='about-chart--item' id='javascript'>
                        <div className='about-chart'>
                            <p>75%</p>
                        </div>
                        <div className='about-chart--text'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                    <div className='about-chart--item' id='react'>
                        <div className='about-chart'>
                            <p>25%</p>
                        </div>
                        <div className='about-chart--text'>
                            <h3>React JS</h3>
                        </div>
                    </div>

                </div>
                <div className='about-chart--list'>
                    <div className='about-chart--item' id='node'>
                        <div className='about-chart'>
                            <p>25%</p>
                        </div>
                        <div className='about-chart--text'>
                            <h3>Node JS</h3>
                        </div>
                    </div>
                    <div className='about-chart--item' id='php'>
                        <div className='about-chart'>
                            <p>45%</p>
                        </div>
                        <div className='about-chart--text'>
                            <h3>PHP</h3>
                        </div>
                    </div>
                    <div className='about-chart--item' id='scss'>
                        <div className='about-chart'>
                            <p>5%</p>
                        </div>
                        <div className='about-chart--text'>
                            <h3>SCSS</h3>
                        </div>
                    </div>
                    <div className='about-chart--item' id='jquery'>
                        <div className='about-chart'>
                            <p>5%</p>
                        </div>
                        <div className='about-chart--text'>
                            <h3>JQuery</h3>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MySkills