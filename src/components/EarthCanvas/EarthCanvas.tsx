import { OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import CanvasLoader from "../CanvasLoader/CanvasLoader";

const Earth = () => {
    const earth = useGLTF("./planet/scene.gltf");

    return (
        <primitive object={earth.scene} scale={2} position-y={0} rotation-y={0} />
    );
};

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop="demand"
            camera={{
                fov: 11,
                position: [20, 3, 5]
            }}
        >
            <Suspense fallback={<CanvasLoader />} >
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
            </Suspense>
        </Canvas>
    )
}

export default EarthCanvas;
