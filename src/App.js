import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Menu from './component/menu'
import Home from './component/home'
import './App.css';



export default function App(){
    return(
        <BrowserRouter>
            <div className='App'>
                <Menu/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}