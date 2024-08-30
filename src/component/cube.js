import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

function Box(props){
    const ref = useRef();
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    useFrame((state, delta) =>{ (ref.current.rotation.x += delta); });

    return(
        <mesh 
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(e)=>{click(!clicked)}}
            onPointerOver={(e)=>{e.stopPropagation(), hover(true)}}
            onPointerOut={(e)=>{hover(false)}}>
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color={hovered ? 'hotpink':'orange'}/>
        </mesh>
    )
}

export default function Cube(){
    return(
        <Canvas>
            <ambientLight intensity={Math.PI / 2}/>
            <spotLight position={[10, 10, 10]} penumbra={1} decay={0} intensity={Math.PI / 2}/>
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI}/>
            <Box position={[-1.2, 0, 0]}/>
            <Box position={[1.2, 0, 0]}/>
            <OrbitControls/>
        </Canvas>
    )
}
