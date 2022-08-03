import { Routes, Route } from 'react-router-dom';
import Portifolio from '../pages/Portifolio';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';

function AppRouter() {
    return (
        <Routes>
            <Route path='/portfolio' element={<Portifolio />} />
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/bloghahah' element={<Blog />} />
        </Routes>
    )
}

export default AppRouter

