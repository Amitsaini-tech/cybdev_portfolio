import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  life: number;
  maxLife: number;
}

function ParticleSystem({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const particlesRef = useRef<Particle[]>([]);
  const meshRef = useRef<THREE.Points>(null);
  const positionRef = useRef<Float32Array | null>(null);

  useEffect(() => {
    const particleCount = 800;
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1
      ),
      life: Math.random(),
      maxLife: 1 + Math.random(),
    }));

    if (meshRef.current) {
      positionRef.current = new Float32Array(particleCount * 3);
      meshRef.current.geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positionRef.current, 3)
      );
    }
  }, []);

  useFrame(() => {
    if (!meshRef.current || !positionRef.current) return;

    const cursorPos = new THREE.Vector3(mousePosition.x * 5, mousePosition.y * 5, 0);

    particlesRef.current.forEach((particle, index) => {
      particle.life -= 0.005;

      if (particle.life <= 0) {
        particle.position.set(
          cursorPos.x + (Math.random() - 0.5) * 2,
          cursorPos.y + (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 10
        );
        particle.life = particle.maxLife;
        particle.velocity.set(
          (Math.random() - 0.5) * 0.15,
          (Math.random() - 0.5) * 0.15,
          (Math.random() - 0.5) * 0.1
        );
      }

      particle.position.add(particle.velocity);

      const angle = Math.atan2(particle.position.y - cursorPos.y, particle.position.x - cursorPos.x);
      const distance = particle.position.distanceTo(cursorPos);
      const force = Math.max(0, 1 - distance / 8);

      particle.velocity.x -= Math.cos(angle) * force * 0.02;
      particle.velocity.y -= Math.sin(angle) * force * 0.02;

      positionRef.current![index * 3] = particle.position.x;
      positionRef.current![index * 3 + 1] = particle.position.y;
      positionRef.current![index * 3 + 2] = particle.position.z;
    });

    if (meshRef.current.geometry.attributes.position) {
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry />
      <pointsMaterial size={0.08} color="#00d4ff" sizeAttenuation transparent opacity={0.6} />
    </points>
  );
}

export default function ParticleBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setMousePosition({ x, y });
  };

  return (
    <div className="w-full h-full" onMouseMove={handleMouseMove}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00d4ff" />
        <ParticleSystem mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
}
