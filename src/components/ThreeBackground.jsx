import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';

const AnimatedSphere = ({ position, color, distort = 0.4, speed = 2, opacity = 0.9 }) => (
  <Sphere args={[1.1, 64, 64]} position={position}>
    <MeshDistortMaterial
      color={color}
      attach="material"
      distort={distort}
      speed={speed}
      roughness={0.2}
      metalness={0.1}
      transparent
      opacity={opacity}
    />
  </Sphere>
);

const ThreeBackground = () => {
  return (
    <Canvas
      className="hero-three-canvas"
      camera={{ position: [0, 0, 7], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.6]}
    >
      <color attach="background" args={['#0F172A']} />
      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 8, 5]} intensity={0.9} color="#3B82F6" />
      <spotLight
        position={[-6, 4, 4]}
        angle={0.6}
        penumbra={0.5}
        intensity={0.7}
        color="#8B5CF6"
      />

      <Suspense fallback={null}>
        <AnimatedSphere
          position={[-2.8, 0.3, -3]}
          color="#1E40AF"
          distort={0.45}
          speed={2.2}
          opacity={0.85}
        />
        <AnimatedSphere
          position={[1.9, -0.3, -4]}
          color="#6D28D9"
          distort={0.55}
          speed={1.6}
          opacity={0.8}
        />
        <AnimatedSphere
          position={[0.2, 1.7, -5]}
          color="#0E7490"
          distort={0.4}
          speed={2.0}
          opacity={0.75}
        />

        <Stars
          radius={40}
          depth={50}
          count={1500}
          factor={2.5}
          saturation={0.2}
          fade
        />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Suspense>
    </Canvas>
  );
};

export default ThreeBackground;
