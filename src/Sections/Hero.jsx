import React from "react";
import NavBar from "../Components/NavBar";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Text } from "@react-three/drei";
import { Color } from "three";
import Logo3D from "../Components/Logo3D";

const Hero = () => {
  return (
    <div className="relative h-[100dvh] w-[100dvw]">
      <NavBar />
      <Canvas camera={{ position: [0, 0, 50], fov: 35 }}>
        <Logo3D />
        <color attach="background" args={["#c1ff30"]} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Hero;
