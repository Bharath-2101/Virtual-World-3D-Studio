import { MeshTransmissionMaterial, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useMemo } from "react";

const Logo3D = () => {
  const boxRef = useRef();
  const { viewport } = useThree();

  const scale = useMemo(
    () => Math.max(viewport.width, viewport.height) / 22,
    [viewport.width, viewport.height]
  );

  useFrame((_, delta) => {
    if (!boxRef.current) return;
    boxRef.current.rotation.x += delta * 0.6;
    boxRef.current.rotation.y += delta * 0.9;
  });

  return (
    <group scale={scale}>
      <Text
        font="/fonts/Nippo-Regular.otf"
        fontSize={3.5}
        position={[0, 2, 4]}
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
        color="#000"
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
        color="#000"
      >
        WRLD
      </Text>

      <Text
        font="/fonts/SpaceGrotesk-Regular.ttf"
        fontSize={0.6}
        position={[0, -3, 4]}
        anchorX="center"
        anchorY="middle"
        color="#000"
      >
        [ VIRTUAL LAB DESIGN ]
      </Text>

      <mesh ref={boxRef} position={[0, 0, 7]}>
        <torusGeometry args={[2, 1, 16, 100]} />
        <MeshTransmissionMaterial
          color="#c1ff30"
          transmission={1}
          roughness={0.35}
          thickness={0.77}
          ior={1.06}
          chromaticAberration={0.19}
          backside
          distortion={1}
          distortionScale={0.5}
          temporalDistortion={0.36}
        />
      </mesh>
    </group>
  );
};

export default Logo3D;
