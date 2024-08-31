import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Menu from './component/menu';
import Home from './component/home';
import Cube from './component/cube';
import UiPairing from './component/uiPairing';
import './App.css';



export default function App(){
    return(
        <BrowserRouter>
            <div className='App'>
                <Menu/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Cube' element={<Cube/>}/>
                    <Route path='/UiPairing' element={<UiPairing/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}