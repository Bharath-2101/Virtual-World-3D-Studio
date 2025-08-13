import React, { Suspense, useMemo } from "react";
import NavBar from "../Components/NavBar";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Logo3D from "../Components/Logo3D";

const Hero = () => {
  const cameraSettings = useMemo(() => ({ position: [0, 0, 50], fov: 35 }), []);

  return (
    <div className="relative h-screen w-screen">
      <NavBar />
      <Canvas camera={cameraSettings} shadows>
        <Suspense fallback={null}>
          <Logo3D />
          <color attach="background" args={["#c1ff30"]} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero;
