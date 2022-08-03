import React from 'react'
import { Link } from 'react-router-dom'

function PortfolioHeader() {
    return (
        <>
            <div className='portifolio-header'>
                <div className='portifolio-title'>
                    <h1>MY </h1>
                    <span>PORTIFOLIO</span>
                </div>
                <div className='title-bg'>WORKS</div>
            </div>
            <div className='portifolio-tab'>
                <ul className='portifolio-tab-list'>
                    <li className='portifolio-tab-item'>
                        <Link to={'/portfolio'}>All</Link>
                    </li>
                    <li className='portifolio-tab-item'>
                        <Link to={'/portfolio/logo'}>LOGO</Link>
                    </li>
                    <li className='portifolio-tab-item'>
                        <Link to={'/portfolio/video'}>VIDEO</Link>
                    </li>
                    <li className='portifolio-tab-item'>
                        <Link to={'/portfolio/graphic-design'}>GRAPHIC DESIGN</Link>
                    </li>
                    <li className='portifolio-tab-item'>
                        <Link to={'/portfolio/mockup'}>MOCKUP</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default PortfolioHeader