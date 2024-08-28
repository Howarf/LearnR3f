import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import './App_init.css';

export default function App(){
    return(
        <div className='App'>
            <Canvas camera={{ position: [0, 0, 2] }}>
                <mesh>
                    <boxGeometry />
                    <meshBasicMaterial color={0x00ff00} wireframe />
                </mesh>
            </Canvas>
        </div>
    )
}