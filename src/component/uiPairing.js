import { ContactShadows, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { Suspense, useDeferredValue } from "react";
import tunnel from "tunnel-rat";
import styles from "../css/uiPairing.module.css";

export default function UiPairing(){
    const states = tunnel();
    const MODELS = {
        Beech: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf',
        Lime: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-lime/model.gltf',
        Spruce: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-spruce/model.gltf'
      }
    const { model } = useControls({model:{value:'Beech', options: Object.keys(MODELS)}})

    function Model({ url, ...props }){
        const deferred = useDeferredValue(url);
        const { scene } = useGLTF(deferred);
        return(
            <primitive object={scene} {...props}/>
        )
    }

    return(
        <>
            <Canvas camera={{position:[-10, 10, 40], fov:50}}>
                <hemisphereLight color="white" groundColor="blue" intensity={1}/>
                <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1}/>
                <pointLight position={[0, 10, 0]} decay={0} intensity={1}/>
                <group position={[0, -10, 0]}>
                    <Suspense fallback={<states.In>Loading...</states.In>}>
                        <Model position={[0, 0.25, 0]} url={MODELS[model]}/>
                    </Suspense>
                    <ContactShadows scale={20} blur={10} far={20}/>
                </group>
                <OrbitControls/>
            </Canvas>
            <footer className={styles.footer}>
                <p>이 나무는 {model.toLowerCase()}입니다.</p><br/>
                <states.Out/>
            </footer>
        </>
    )
}