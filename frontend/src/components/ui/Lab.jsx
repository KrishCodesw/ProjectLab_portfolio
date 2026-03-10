import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

function LabRoom() {
  return (
    <mesh>
      <boxGeometry args={[5, 1, 5]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}

export default function LabScene() {
  return (
    <Canvas camera={{ position: [4, 3, 6], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1} />

      <LabRoom />

      <OrbitControls enableZoom={false} enablePan={false} />
      {/* <Environment preset="city" /> */}
    </Canvas>
  );
}
