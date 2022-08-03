import React from 'react'
import '../../styles/About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
    React.useEffect(() => {
        AOS.init({duration: 2000});
    }, [])
    return (
        <>
            <div className='about-container' data-aos='fade-up'>
                <h2 className='about--text'>EXPERIENCE & EDUCATION</h2>
                <div className='about-edu--list'>
                    <div className='about-edu--item'>
                        <span className='edu-icon'><i class="fa fa-briefcase"></i></span>
                        <span className='edu-time'><p>2022</p></span>
                        <span className='edu-job'><h2>WEB DEVELOPER - Freelance</h2></span>
                        <span className='edu-desc'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ea ducimus molestiae laudantium est quisquam recusandae atque repellat hic maiores quod provident ipsa nihil, obcaecati maxime asperiores velit sint soluta!
                            </p>
                        </span>
                    </div>
                    <div className='about-edu--item'>
                        <span className='edu-icon'><i class="fa fa-briefcase"></i></span>
                        <span className='edu-time'><p>2021</p></span>
                        <span className='edu-job'><h2>WEB DEVELOPER - Student</h2></span>
                        <span className='edu-desc'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ea ducimus molestiae laudantium est quisquam recusandae atque repellat hic maiores quod provident ipsa nihil, obcaecati maxime asperiores velit sint soluta!
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience