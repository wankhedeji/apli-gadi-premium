import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

function CarModel() {
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.5}>
      <group>
        {/* Car body */}
        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[3, 0.8, 1.4]} />
          <meshStandardMaterial color="hsl(18, 90%, 55%)" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Cabin */}
        <mesh position={[0.2, 0.9, 0]}>
          <boxGeometry args={[1.6, 0.6, 1.2]} />
          <meshStandardMaterial color="hsl(220, 20%, 15%)" metalness={0.5} roughness={0.3} />
        </mesh>
        {/* Windshield */}
        <mesh position={[-0.5, 0.85, 0]} rotation={[0, 0, 0.3]}>
          <planeGeometry args={[0.7, 0.5]} />
          <meshStandardMaterial color="hsl(200, 50%, 70%)" transparent opacity={0.5} metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Wheels */}
        {[[-1, -0.1, 0.8], [-1, -0.1, -0.8], [1, -0.1, 0.8], [1, -0.1, -0.8]].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.15, 16]} />
            <meshStandardMaterial color="hsl(0, 0%, 15%)" metalness={0.3} roughness={0.8} />
          </mesh>
        ))}
        {/* Headlights */}
        <mesh position={[-1.5, 0.35, 0.45]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="hsl(50, 100%, 80%)" emissive="hsl(50, 100%, 60%)" emissiveIntensity={2} />
        </mesh>
        <mesh position={[-1.5, 0.35, -0.45]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="hsl(50, 100%, 80%)" emissive="hsl(50, 100%, 60%)" emissiveIntensity={2} />
        </mesh>
      </group>
    </Float>
  );
}

function GlowingSphere() {
  return (
    <mesh position={[0, -1.5, 0]} scale={[6, 0.1, 6]}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshDistortMaterial
        color="hsl(18, 90%, 55%)"
        transparent
        opacity={0.15}
        distort={0.3}
        speed={2}
      />
    </mesh>
  );
}

export default function CarScene() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [4, 2, 4], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-3, 2, -2]} intensity={0.5} color="hsl(18, 90%, 55%)" />
        <pointLight position={[3, 1, 3]} intensity={0.3} color="hsl(40, 70%, 50%)" />
        <Suspense fallback={null}>
          <CarModel />
          <GlowingSphere />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={2}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}
