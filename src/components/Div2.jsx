import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, SpotLight, useGLTF } from "@react-three/drei";
import { Ducati } from "./Ducati";

function DucatiModel() {
  const { scene } = useGLTF("/models/ducati.glb");
   const ref = useRef();

  
  // useFrame(() => {
  //   if (ref.current) {
  //     ref.current.rotation.y += 0.004; 
  //   }
  // });
  return <primitive ref={ref} object={scene} scale={2.5} position={[0, -1.2, 0]} />;
}

const Div2 = () => {
  return (
    <div className="div2 h-[50vh] absolute md:h-screen w-full  bg-transparent ">
      <Canvas camera={{ position: [5, 1, 8], fov: 40 }}  shadows>
        <OrbitControls
          enableDamping
          panSpeed={0.1}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
        />
        <directionalLight position={[0,2,0]} penumbra={2} intensity={5} angle={2} castShadow />
        {/* <directionalLight position={[0,-1,4]}  intensity={1}   /> */}
       
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, -2, 0]} intensity={7}  />

        <Suspense fallback={null}>
          {/* <DucatiModel/>
          <Ducati/> */}
        </Suspense>
  <DucatiModel/>
          {/* <Ducati/> */}
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
