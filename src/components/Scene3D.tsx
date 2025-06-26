
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export const Scene3D = () => {
  const sphereRef = useRef<THREE.Mesh>(null)
  const boxRef = useRef<THREE.Mesh>(null)
  const torusRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.2
      sphereRef.current.rotation.y = time * 0.1
      sphereRef.current.position.x = Math.sin(time * 0.5) * 2
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.x = time * 0.3
      boxRef.current.rotation.z = time * 0.2
      boxRef.current.position.y = Math.sin(time * 0.3) * 1.5
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.1
      torusRef.current.rotation.y = time * 0.4
      torusRef.current.position.z = Math.sin(time * 0.2) * 1
    }
  })

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#0818A8" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#C0C0C0" />
      
      <mesh ref={sphereRef} position={[-3, 1, -2]} scale={0.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color="#C0C0C0" transparent opacity={0.3} />
      </mesh>
      
      <mesh ref={boxRef} position={[3, -1, -3]} scale={0.3}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color="#0818A8" transparent opacity={0.4} />
      </mesh>
      
      <mesh ref={torusRef} position={[0, 2, -4]} scale={0.4}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshPhongMaterial color="#C0C0C0" transparent opacity={0.2} />
      </mesh>
    </>
  )
}
