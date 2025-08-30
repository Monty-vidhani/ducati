import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function DucatiModel() {
  const { scene } = useGLTF("/models/ducati.glb");
   const ref = useRef();

  // Continuous rotation (showcase effect)
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y -= 0.010; // adjust speed here
    }
  });
  return <primitive ref={ref} object={scene} scale={2} position={[0, -1.2, 0]} />;
}

const Div2 = () => {
  return (
    <div className="h-[50vh] md:h-screen w-full md:w-1/2 bg-white/30 top-0">
      <Canvas camera={{ position: [5, 1, 8], fov: 30 }} shadows>
        <OrbitControls
          enableDamping
          panSpeed={0.1}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
        />

        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={3} castShadow />

        <Suspense fallback={null}>
          <DucatiModel />
        </Suspense>

        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
        >
          <planeGeometry args={[50, 50]} />
          <shadowMaterial opacity={0.3} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Div2;
