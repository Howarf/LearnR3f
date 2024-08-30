import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Menu from './component/menu'
import Home from './component/home'
import Cube from './component/cube';
import './App.css';



export default function App(){
    return(
        <BrowserRouter>
            <div className='App'>
                <Menu/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Cube' element={<Cube/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}