import { MeshTransmissionMaterial, Environment, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useGlassControls } from "../Components/Controls";
import React, { useRef } from "react";

const Logo3D = () => {
  const boxRef = useRef();
  const { viewport } = useThree();
  useFrame(() => {
    boxRef.current.rotation.x += 0.01;
    boxRef.current.rotation.y += 0.015;
  });
  // const {
  //   color,
  //   transmission,
  //   roughness,
  //   thickness,
  //   ior,
  //   chromaticAberration,
  //   backside,
  //   distortion,
  //   distortionScale,
  //   temporalDistortion,
  // } = useGlassControls();
  const max =
    viewport.width > viewport.height ? viewport.width : viewport.height;

  return (
    <group scale={max / 22}>
      <Text
        font="/fonts/Nippo-Regular.otf"
        fontSize={3.5}
        position={[0, 2, 4]}
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
        color={"#000000"}
      >
        VRTL
      </Text>

      <Text
        font="/fonts/Nippo-Regular.otf"
        fontSize={3.5}
        position={[0, -1, 4]}
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
        color={"#000000"}
      >
        WRLD
      </Text>

      <Text
        font="/fonts/SpaceGrotesk-Regular.ttf"
        fontSize={0.6}
        position={[0, -3, 4]}
        anchorX="center"
        anchorY="middle"
        color={"#000000"}
      >
        [ VIRTUAL LAB DESIGN ]
      </Text>
      <mesh ref={boxRef} position={[0, 0, 7]}>
        <torusGeometry args={[2, 1, 16, 100]} />
        <MeshTransmissionMaterial
          color={"#c1ff30"}
          transmission={1}
          roughness={0.35}
          thickness={0.77}
          ior={1.06}
          chromaticAberration={0.19}
          backside={true}
          distortion={1}
          distortionScale={0.5}
          temporalDistortion={0.36}
          // color={color}
          // transmission={transmission}
          // roughness={roughness}
          // thickness={thickness}
          // ior={ior}
          // chromaticAberration={chromaticAberration}
          // backside={backside}
          // distortion={distortion}
          // distortionScale={distortionScale}
          // temporalDistortion={temporalDistortion}
        />
      </mesh>
    </group>
  );
};

export default Logo3D;
