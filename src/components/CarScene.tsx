import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Sparkles,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { Component, Suspense, useRef, useState } from "react";
import type { ReactNode, ErrorInfo } from "react";
import * as THREE from "three";

class SceneErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback?: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }
  componentDidCatch(error: Error, _info: ErrorInfo) {
    console.warn("3D scene resource failed:", error.message);
  }
  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}

const COLOR_SWATCHES = [
  { name: "Crimson Red", color: "#DC143C" },
  { name: "Midnight Blue", color: "#191970" },
  { name: "Lamborghini Yellow", color: "#FFD700" },
  { name: "Matte Black", color: "#1c1c1c" },
  { name: "Pearl White", color: "#F0EEE8" },
];

function Wheel({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} rotation={[Math.PI / 2, 0, 0]}>
      {/* Tire */}
      <mesh>
        <cylinderGeometry args={[0.35, 0.35, 0.22, 24]} />
        <meshStandardMaterial color="#111111" roughness={0.9} metalness={0.1} />
      </mesh>
      {/* Rim */}
      <mesh>
        <cylinderGeometry args={[0.27, 0.27, 0.24, 24]} />
        <meshStandardMaterial color="#3a3a4a" metalness={0.92} roughness={0.15} />
      </mesh>
      {/* Hub center */}
      <mesh>
        <cylinderGeometry args={[0.07, 0.07, 0.25, 16]} />
        <meshStandardMaterial color="#FFD700" metalness={0.95} roughness={0.08} />
      </mesh>
      {/* 5 Spokes */}
      {Array.from({ length: 5 }).map((_, i) => {
        const angle = (i / 5) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.sin(angle) * 0.16, Math.cos(angle) * 0.16, 0]}
            rotation={[0, 0, angle]}
          >
            <boxGeometry args={[0.04, 0.32, 0.038]} />
            <meshStandardMaterial color="#4a4a5a" metalness={0.9} roughness={0.2} />
          </mesh>
        );
      })}
      {/* Gold brake caliper */}
      <mesh position={[0.18, 0, 0]}>
        <boxGeometry args={[0.05, 0.13, 0.16]} />
        <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.18} />
      </mesh>
    </group>
  );
}

function ExhaustPipe({ position }: { position: [number, number, number] }) {
  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(({ clock }) => {
    if (matRef.current) {
      matRef.current.emissiveIntensity =
        0.6 + Math.sin(clock.getElapsedTime() * 3.5) * 0.45;
    }
  });

  return (
    <mesh position={position} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[0.055, 0.048, 0.28, 12]} />
      <meshStandardMaterial
        ref={matRef}
        color="#2a2a2a"
        metalness={0.9}
        roughness={0.2}
        emissive="#FF5500"
        emissiveIntensity={0.8}
      />
    </mesh>
  );
}

function SuperCarModel({ bodyColor }: { bodyColor: string }) {
  return (
    <group>
      {/* ── LOWER BODY ── */}
      <mesh position={[0, 0.12, 0]}>
        <boxGeometry args={[3.4, 0.42, 1.58]} />
        <meshStandardMaterial color={bodyColor} metalness={0.92} roughness={0.08} />
      </mesh>

      {/* Side sills */}
      <mesh position={[0, 0.04, 0.84]}>
        <boxGeometry args={[3.1, 0.2, 0.1]} />
        <meshStandardMaterial color="#111111" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.04, -0.84]}>
        <boxGeometry args={[3.1, 0.2, 0.1]} />
        <meshStandardMaterial color="#111111" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* ── MID BODY ── */}
      <mesh position={[0, 0.42, 0]}>
        <boxGeometry args={[3.0, 0.28, 1.5]} />
        <meshStandardMaterial color={bodyColor} metalness={0.92} roughness={0.08} />
      </mesh>

      {/* ── CABIN ── */}
      <mesh position={[0.1, 0.74, 0]}>
        <boxGeometry args={[1.58, 0.42, 1.2]} />
        <meshStandardMaterial color={bodyColor} metalness={0.92} roughness={0.08} />
      </mesh>
      {/* Carbon-fiber roof */}
      <mesh position={[0.2, 0.97, 0]}>
        <boxGeometry args={[1.28, 0.07, 1.12]} />
        <meshStandardMaterial color="#141414" metalness={0.55} roughness={0.45} />
      </mesh>

      {/* ── WINDSHIELD ── */}
      <mesh position={[-0.6, 0.83, 0]} rotation={[0, 0, 0.52]}>
        <planeGeometry args={[0.68, 1.08]} />
        <meshStandardMaterial
          color="#091520"
          transparent
          opacity={0.78}
          metalness={0.88}
          roughness={0.04}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* ── REAR WINDOW ── */}
      <mesh position={[0.88, 0.8, 0]} rotation={[0, 0, -0.46]}>
        <planeGeometry args={[0.56, 1.08]} />
        <meshStandardMaterial
          color="#091520"
          transparent
          opacity={0.78}
          metalness={0.88}
          roughness={0.04}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Side windows */}
      {[0.63, -0.63].map((z, i) => (
        <mesh key={i} position={[0.1, 0.79, z]}>
          <planeGeometry args={[1.32, 0.37]} />
          <meshStandardMaterial
            color="#091520"
            transparent
            opacity={0.72}
            metalness={0.88}
            roughness={0.04}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* ── HOOD ── */}
      <mesh position={[-1.3, 0.44, 0]} rotation={[0, 0, -0.17]}>
        <boxGeometry args={[0.88, 0.19, 1.44]} />
        <meshStandardMaterial color={bodyColor} metalness={0.92} roughness={0.08} />
      </mesh>
      <mesh position={[-1.72, 0.28, 0]}>
        <boxGeometry args={[0.18, 0.11, 1.4]} />
        <meshStandardMaterial color={bodyColor} metalness={0.92} roughness={0.08} />
      </mesh>

      {/* ── REAR DECK ── */}
      <mesh position={[1.34, 0.52, 0]}>
        <boxGeometry args={[0.62, 0.17, 1.4]} />
        <meshStandardMaterial color={bodyColor} metalness={0.92} roughness={0.08} />
      </mesh>

      {/* ── REAR SPOILER / WING ── */}
      <mesh position={[1.5, 1.2, 0]}>
        <boxGeometry args={[0.3, 0.06, 1.65]} />
        <meshStandardMaterial color="#141414" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Gold wing edge */}
      <mesh position={[1.5, 1.24, 0]}>
        <boxGeometry args={[0.32, 0.012, 1.68]} />
        <meshStandardMaterial color="#FFD700" metalness={0.96} roughness={0.08} />
      </mesh>
      {/* Wing supports */}
      {[0.64, -0.64].map((z, i) => (
        <mesh key={i} position={[1.5, 1.0, z]}>
          <boxGeometry args={[0.065, 0.44, 0.065]} />
          <meshStandardMaterial color="#141414" metalness={0.6} roughness={0.4} />
        </mesh>
      ))}

      {/* ── FRONT SPLITTER ── */}
      <mesh position={[-1.74, -0.1, 0]}>
        <boxGeometry args={[0.28, 0.054, 1.56]} />
        <meshStandardMaterial color="#0f0f0f" metalness={0.5} roughness={0.55} />
      </mesh>
      {/* Gold splitter edge */}
      <mesh position={[-1.88, -0.08, 0]}>
        <boxGeometry args={[0.01, 0.038, 1.58]} />
        <meshStandardMaterial color="#FFD700" metalness={0.96} roughness={0.08} />
      </mesh>

      {/* ── REAR DIFFUSER ── */}
      <mesh position={[1.7, -0.06, 0]}>
        <boxGeometry args={[0.18, 0.1, 1.38]} />
        <meshStandardMaterial color="#0f0f0f" metalness={0.5} roughness={0.55} />
      </mesh>
      {[-0.48, -0.16, 0.16, 0.48].map((z, i) => (
        <mesh key={i} position={[1.7, -0.02, z]}>
          <boxGeometry args={[0.2, 0.075, 0.03]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}

      {/* ── SIDE AIR INTAKES ── */}
      {[0.83, -0.83].map((z, i) => (
        <mesh key={i} position={[0.55, 0.27, z]}>
          <boxGeometry args={[0.58, 0.17, 0.06]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}

      {/* ── SIDE MIRRORS ── */}
      {[0.66, -0.66].map((z, i) => (
        <mesh key={i} position={[-0.36, 0.9, z]}>
          <boxGeometry args={[0.19, 0.08, 0.11]} />
          <meshStandardMaterial color="#141414" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}

      {/* ── HEADLIGHTS (LED) ── */}
      {[0.46, -0.46].map((z, i) => (
        <group key={i}>
          <mesh position={[-1.74, 0.29, z]}>
            <boxGeometry args={[0.055, 0.12, 0.3]} />
            <meshStandardMaterial
              color="#FFFFF0"
              emissive="#FFFF88"
              emissiveIntensity={3.5}
              metalness={0.3}
              roughness={0.08}
            />
          </mesh>
          {/* DRL strip */}
          <mesh position={[-1.75, 0.19, z]}>
            <boxGeometry args={[0.038, 0.025, 0.26]} />
            <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={5} />
          </mesh>
        </group>
      ))}

      {/* ── TAIL LIGHTS (LED) ── */}
      {[0.48, -0.48].map((z, i) => (
        <group key={i}>
          <mesh position={[1.75, 0.29, z]}>
            <boxGeometry args={[0.05, 0.12, 0.27]} />
            <meshStandardMaterial
              color="#FF0000"
              emissive="#FF0000"
              emissiveIntensity={3}
              metalness={0.3}
              roughness={0.08}
            />
          </mesh>
          {/* LED strip */}
          <mesh position={[1.76, 0.17, z]}>
            <boxGeometry args={[0.038, 0.025, 0.24]} />
            <meshStandardMaterial color="#FF2200" emissive="#FF2200" emissiveIntensity={5} />
          </mesh>
        </group>
      ))}

      {/* ── EXHAUST PIPES ── */}
      <ExhaustPipe position={[1.62, -0.14, 0.33]} />
      <ExhaustPipe position={[1.62, -0.14, -0.33]} />

      {/* ── UNDERGLOW ── */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[3.0, 0.03, 1.4]} />
        <meshStandardMaterial
          color="#5500FF"
          emissive="#5500FF"
          emissiveIntensity={1.2}
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* ── WHEELS ── */}
      <Wheel position={[-1.1, -0.18, 0.82]} />
      <Wheel position={[-1.1, -0.18, -0.82]} />
      <Wheel position={[1.1, -0.18, 0.82]} />
      <Wheel position={[1.1, -0.18, -0.82]} />

      {/* ── GOLD ACCENT TRIM LINES ── */}
      <mesh position={[-1.5, 0.16, 0]}>
        <boxGeometry args={[0.48, 0.013, 1.6]} />
        <meshStandardMaterial color="#FFD700" metalness={0.96} roughness={0.08} />
      </mesh>
      <mesh position={[1.5, 0.16, 0]}>
        <boxGeometry args={[0.48, 0.013, 1.6]} />
        <meshStandardMaterial color="#FFD700" metalness={0.96} roughness={0.08} />
      </mesh>
    </group>
  );
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.58, 0]}>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        blur={[400, 100]}
        resolution={512}
        mixBlur={0.9}
        mixStrength={20}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#060618"
        metalness={0.8}
        mirror={0}
      />
    </mesh>
  );
}

function LoadingMesh() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = clock.getElapsedTime() * 2;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[0.55, 0.1, 8, 32]} />
      <meshStandardMaterial color="#DC143C" emissive="#DC143C" emissiveIntensity={1.5} />
    </mesh>
  );
}

export default function CarScene() {
  const [bodyColor, setBodyColor] = useState("#DC143C");

  return (
    <div className="w-full h-[400px] md:h-[520px] relative">
      <Canvas camera={{ position: [5, 2.5, 5], fov: 42 }} shadows>
        <color attach="background" args={["#050510"]} />

        {/* Ambient fill */}
        <ambientLight intensity={0.22} />

        {/* Key light — dramatic front-top */}
        <directionalLight position={[-5, 8, 5]} intensity={2.4} color="#ffffff" castShadow />

        {/* Fill light — cool blue side */}
        <directionalLight position={[5, 3, -5]} intensity={0.9} color="#90b8ff" />

        {/* Rim/back light — warm orange */}
        <directionalLight position={[0, -2, -6]} intensity={0.55} color="#ff7040" />

        {/* Accent point lights */}
        <pointLight position={[-3, 1, 0]} intensity={2.8} color="#DC143C" distance={9} />
        <pointLight position={[3, 1, 0]} intensity={1.6} color="#3355ff" distance={7} />
        <pointLight position={[0, 3, 3]} intensity={1.1} color="#ffffff" distance={8} />

        {/* Overhead spotlight */}
        <spotLight
          position={[0, 6, 0]}
          angle={0.38}
          penumbra={0.55}
          intensity={3.2}
          color="#ffffff"
          castShadow
        />

        <Suspense fallback={<LoadingMesh />}>
          <SceneErrorBoundary>
            <Environment preset="city" />
          </SceneErrorBoundary>
          <SuperCarModel bodyColor={bodyColor} />
          <Ground />
          <Sparkles
            count={90}
            scale={[9, 4, 9]}
            size={1.3}
            speed={0.35}
            opacity={0.55}
            color="#7070ff"
          />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.5}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 6}
        />
      </Canvas>

      {/* Color Picker Overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/55 backdrop-blur-sm rounded-full px-4 py-2 z-10">
        {COLOR_SWATCHES.map((swatch) => (
          <button
            key={swatch.color}
            title={swatch.name}
            onClick={() => setBodyColor(swatch.color)}
            className="w-7 h-7 rounded-full border-2 transition-all hover:scale-110 focus:outline-none"
            style={{
              backgroundColor: swatch.color,
              borderColor: bodyColor === swatch.color ? "#ffffff" : "transparent",
              transform: bodyColor === swatch.color ? "scale(1.25)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
