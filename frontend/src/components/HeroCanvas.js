import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function FloatingTorusKnot() {
  const colorStops = useMemo(() => [
    '#67e8f9', '#22d3ee', '#a78bfa', '#f472b6', '#22d3ee'
  ], []);
  return (
    <mesh rotation={[0.4, 0.6, 0]}>
      <torusKnotGeometry args={[1, 0.35, 220, 32]} />
      <meshStandardMaterial color={colorStops[2]} metalness={0.35} roughness={0.2} />
    </mesh>
  );
}

const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [2.5, 2.2, 3.2], fov: 55 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 2]} intensity={0.8} />
        <Suspense fallback={null}>
          <group position={[0, 0, 0]}>
            <FloatingTorusKnot />
          </group>
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;

