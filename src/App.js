import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Menu from './component/menu';
import Home from './component/home';
import Cube from './component/cube';
import UiPairing from './component/uiPairing';
import Mix_Controlls from './component/mix_controlls';
import MixingHTML from './component/mixingHTML';
import CanvasWithText from './component/canvasWithText';
import ScrollCanvas from './component/scrollCanvas';
import './App.css';

export default function App(){
    return(
        <BrowserRouter>
            <div className='App'>
                <Menu/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Cube' element={<Cube />} />
                    <Route path='/UiPairing' element={<UiPairing />} />
                    <Route path='/Mix_Controlls' element={<Mix_Controlls />} />
                    <Route path='/Mix_HTML' element={<MixingHTML />} />
                    <Route path='/CanvasWithText' element={<CanvasWithText />} />
                    <Route path='/ScrollCanvas' element={<ScrollCanvas />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}