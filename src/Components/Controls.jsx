import { useControls } from "leva";

export function useGlassControls() {
  return useControls("Glass Material", {
    color: { value: "#c1ff30" },
    transmission: { value: 1, min: 0, max: 3, step: 0.01 },
    roughness: { value: 0.07, min: 0, max: 3, step: 0.01 },
    thickness: { value: 0.89, min: 0, max: 10, step: 0.01 },
    ior: { value: 1.0, min: 1.0, max: 4, step: 0.01 },
    chromaticAberration: { value: 0.1, min: 0, max: 3, step: 0.01 },
    backside: { value: true },
    distortion: { value: 0.1, min: 0, max: 1, step: 0.01 },
    distortionScale: { value: 0.5, min: 0, max: 1, step: 0.01 },
    temporalDistortion: { value: 0.1, min: 0, max: 1, step: 0.01 },
  });
}
