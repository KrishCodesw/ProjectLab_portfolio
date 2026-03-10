import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box, Line } from "@react-three/drei";
import * as THREE from "three";

function WireframeRoom() {
  return (
    <group>
      {/* Room outline */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(10, 6, 8)]} />
        <lineBasicMaterial color="#333333" />
      </lineSegments>

      {/* Floor grid */}
      <gridHelper args={[10, 20, "#222222", "#111111"]} position={[0, -3, 0]} />
    </group>
  );
}

function LabTable({ position }) {
  return (
    <group position={position}>
      {/* Table top outline */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(3, 0.1, 1.5)]} />
        <lineBasicMaterial color="#444444" />
      </lineSegments>

      {/* Table legs */}
      {[
        [-1.4, -0.4, -0.7],
        [1.4, -0.4, -0.7],
        [-1.4, -0.4, 0.7],
        [1.4, -0.4, 0.7],
      ].map((pos, i) => (
        <Line
          key={i}
          points={[
            [pos[0], pos[1], pos[2]],
            [pos[0], pos[1] - 0.7, pos[2]],
          ]}
          color="#444444"
          lineWidth={1}
        />
      ))}
    </group>
  );
}

function Equipment({ position, color = "#ff4500" }) {
  return (
    <group position={position}>
      <Box args={[0.4, 0.3, 0.3]}>
        <meshBasicMaterial color={color} />
      </Box>
    </group>
  );
}

function Monitor({ position }) {
  return (
    <group position={position}>
      {/* Monitor outline */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(0.8, 0.5, 0.05)]} />
        <lineBasicMaterial color="#666666" />
      </lineSegments>

      {/* Screen */}
      <Box args={[0.75, 0.45, 0.01]} position={[0, 0, 0.03]}>
        <meshBasicMaterial color="#001122" />
      </Box>
    </group>
  );
}

function ServerRack({ position }) {
  return (
    <group position={position}>
      {/* Main rack outline */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(0.6, 1.8, 0.6)]} />
        <lineBasicMaterial color="#555555" />
      </lineSegments>

      {/* Server unit outlines */}
      {[0.6, 0.3, 0, -0.3, -0.6].map((y, i) => (
        <lineSegments key={i} position={[0, y, 0]}>
          <edgesGeometry args={[new THREE.BoxGeometry(0.55, 0.08, 0.55)]} />
          <lineBasicMaterial color="#777777" />
        </lineSegments>
      ))}

      {/* LED indicators */}
      {[0.6, 0.3, 0, -0.3, -0.6].map((y, i) => (
        <Box key={i} args={[0.02, 0.02, 0.02]} position={[0.25, y, 0.28]}>
          <meshBasicMaterial color="#00ff00" />
        </Box>
      ))}
    </group>
  );
}

function WallOutline() {
  return (
    <group>
      {/* Back wall outline */}
      <Line
        points={[
          [-5, -3, -4],
          [5, -3, -4],
          [5, 3, -4],
          [-5, 3, -4],
          [-5, -3, -4],
        ]}
        color="#333333"
        lineWidth={1}
      />

      {/* Side wall outlines */}
      <Line
        points={[
          [-5, -3, -4],
          [-5, -3, 4],
          [-5, 3, 4],
          [-5, 3, -4],
        ]}
        color="#333333"
        lineWidth={1}
      />
      <Line
        points={[
          [5, -3, -4],
          [5, -3, 4],
          [5, 3, 4],
          [5, 3, -4],
        ]}
        color="#333333"
        lineWidth={1}
      />
    </group>
  );
}

function LabScene3D() {
  return (
    <>
      <WallOutline />

      {/* Floor grid */}
      <gridHelper args={[10, 20, "#222222", "#111111"]} position={[0, -3, 0]} />

      {/* Lab tables */}
      <LabTable position={[-2, -2.5, 0]} />
      <LabTable position={[2, -2.5, 0]} />
      <LabTable position={[0, -2.5, -2]} />

      {/* Equipment pieces */}
      <Equipment position={[-2, -2.3, 0.2]} color="#ff4500" />
      <Equipment position={[2, -2.3, -0.3]} color="#00ff88" />
      <Equipment position={[0.5, -2.3, -2]} color="#4a90e2" />

      {/* Monitors */}
      <Monitor position={[-1.5, -2.1, -2]} />
      <Monitor position={[1.5, -2.1, -2]} />

      {/* Server racks */}
      <ServerRack position={[-4, -1.1, -1]} />
      <ServerRack position={[4, -1.1, -1]} />
    </>
  );
}

export default function LabScene() {
  return (
    <Canvas camera={{ position: [8, 4, 8], fov: 50 }}>
      <ambientLight intensity={0.5} />

      <LabScene3D />

      {/* <OrbitControls
        enableZoom={true}
        enablePan={true}
        screenSpacePanning={false}
        minDistance={5}
        maxDistance={20}
      /> */}
      <OrbitControls
        enableZoom={true}
        target={[0, 0, 0]}
        autoRotate={true}
        autoRotateSpeed={2}
        enablePan={true}
        screenSpacePanning={false}
        panSpeed={0.5} // Adjust pan sensitivity
        minDistance={5}
        maxDistance={20}
        minPolarAngle={Math.PI / 6} // Prevent looking too far up
        maxPolarAngle={Math.PI / 2.2} // Prevent looking too far down
      />
    </Canvas>
  );
}
