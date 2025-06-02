'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { Suspense, useRef, useMemo } from 'react'
import * as THREE from 'three'
import * as random from 'maath/random/dist/maath-random.esm'

function AnimatedParticles() {
  const ref = useRef()

  // Generate positions of 5000 particles within a sphere
  const positions = useMemo(() => {
    return random.inSphere(new Float32Array(80000), { radius: 1.5 })
  }, [])

  // Rotation animation
  useFrame((_, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#1e1e20" // Tailwind's blue-500
          size={0.015}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default function ParticleSphereCanvas() {
  return (
    <div className="w-[14rem] h-[15rem] ">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <AnimatedParticles />
        </Suspense>
      </Canvas>
    </div>
  )
}
