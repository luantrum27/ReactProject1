import React from 'react'
import PortfolioHeader from '../components/Portfolio/PortfolioHeader'
import PortfolioList from '../components/Portfolio/PortfolioList'
import '../styles/Portifolio.css'

function Portifolio() {
    return (
        <div className='portifolio-wrapper'>
            <PortfolioHeader />
            <div className='portifolio-content'>
                <PortfolioList />
            </div>
        </div>
    )
}

export default Portifolio