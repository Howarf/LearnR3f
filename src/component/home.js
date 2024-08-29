import { Canvas } from '@react-three/fiber';

export default function Home(){
    return(
        <Canvas camera={{ position: [0, 0, 2] }}>
            <mesh>
                <boxGeometry />
                <meshBasicMaterial color={0x00ff00} wireframe />
            </mesh>
        </Canvas>
    )
}