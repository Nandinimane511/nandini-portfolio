import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';

const AnimatedSphere = ({ position, color, distort = 0.4, speed = 2 }) => (
  <Sphere args={[1.2, 64, 64]} position={position}>
    <MeshDistortMaterial
      color={color}
      attach="material"
      distort={distort}
      speed={speed}
      roughness={0.2}
      metalness={0.1}
    />
  </Sphere>
);

const ThreeBackground = () => {
  return (
    <Canvas
      className="hero-three-canvas"
      camera={{ position: [0, 0, 7], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['transparent']} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />

      <Suspense fallback={null}>
        <AnimatedSphere position={[-2.5, 0.5, -2]} color="#64ffda" distort={0.4} speed={2.5} />
        <AnimatedSphere position={[2.8, -0.4, -3]} color="#b388ff" distort={0.5} speed={1.8} />
        <AnimatedSphere position={[0.4, 1.6, -4]} color="#ff9e64" distort={0.35} speed={2.1} />

        <Stars
          radius={30}
          depth={40}
          count={1800}
          factor={3}
          saturation={0}
          fade
        />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Suspense>
    </Canvas>
  );
};

export default ThreeBackground;

