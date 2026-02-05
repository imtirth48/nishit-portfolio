import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, useProgress, OrbitControls, Sphere, MeshDistortMaterial, Environment } from '@react-three/drei';

const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.x = t * 0.1;
      sphereRef.current.rotation.y = t * 0.15;
    }
  });

  return (
    <Sphere visible args={[0.7, 100, 200]} ref={sphereRef} scale={2}>
      <MeshDistortMaterial
        color="#466c6b"
        attach="material"
        distort={0.4} // Strength, 0 disables the effect (default=1)
        speed={1.5} // Speed (default=1)
        roughness={0.2}
        metalness={0.1}
      />
    </Sphere>
  );
};

const Loader = () => {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)} % loaded</Html>;
};

const Scene = () => {
  return (
    <Canvas 
      className="canvas-container" 
      camera={{ position: [0, 0, 5] }}
      style={{ width: '100%', height: '100%', minHeight: '300px' }}
    >
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
