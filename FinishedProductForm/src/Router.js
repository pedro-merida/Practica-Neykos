import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FinishedProduct from './components/FinishedProduct';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';

function Router(){
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<LandingPage/>}/>
                <Route path={'/finished-product'} element={<FinishedProduct/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;