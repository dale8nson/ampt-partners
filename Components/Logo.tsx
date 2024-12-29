'use client'
import * as THREE from 'three'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { extend } from '@react-three/fiber'
import { useFont, Text3D, useTexture } from '@react-three/drei'
import { motion } from 'framer-motion-3d'



extend({Text3D, TextGeometry})

export const Logo = () => {

  const font = useFont('/Powerr Med_Regular.json')
  const metalTex = useTexture('/brushed-metal.webp')

  return (
    <motion.group initial={{rotateY:0}} 
    animate={{rotateY:-2 * Math.PI}} 
    transition={{duration:8, repeat: Infinity, ease:'linear'}} position={[0,0,-1]} scale={[4,4,3]} rotation={new THREE.Euler(0, 0, 0)} >
      <mesh position={[-0.35,-0.52,0.7]} scale={[1, 1, .4]} rotation={new THREE.Euler(0, 0, 0)}>
        <Text3D  smooth={.01} font={font.data} bevelEnabled={true} bevelSize={.001} bevelSegments={1} >A
        <meshPhongMaterial map={metalTex} color={0xffffff} emissive={0xffffff} emissiveIntensity={.3} specular={0xffffff} shininess={80} transparent opacity={1} />
        <meshPhongMaterial map={metalTex} color={0xffffff} emissive={0xffffff} emissiveIntensity={.3} specular={0xffffff} shininess={80} transparent opacity={1} />
        </Text3D>
      </mesh>
      <mesh position={[0.7, -0.52, 0]} scale={[-1, 1, .4]} rotation={new THREE.Euler(0, 180 / Math.PI * -60, 0)}>
        <Text3D {...{font:font.data, bevelEnabled:false, bevelSize:.001, bevelSegments:1}}>
          &
          <meshPhongMaterial map={metalTex} color={0xfffffa} emissive={0xffffff} emissiveIntensity={.3} specular={0xffffff} shininess={60} transparent opacity={1} />
          <meshPhongMaterial map={metalTex} color={0xfffffa} emissive={0xffffff} emissiveIntensity={.3} specular={0xffffff} shininess={60} transparent opacity={1} />
        </Text3D>
      </mesh>
      <mesh position={[-0.1,-0.52,-0.4]} scale={[-1, 1, .4]} rotation={new THREE.Euler(0, Math.PI * (1 / 3), 0)}>
        <Text3D  smooth={.01} font={font.data} bevelEnabled={false} bevelSize={.001} bevelSegments={1} >P
        <meshPhongMaterial map={metalTex} color={0xfffffa} emissive={0xffffff} emissiveIntensity={.3} specular={0xffffff} shininess={60} transparent opacity={1} side={THREE.DoubleSide}/>
        <meshPhongMaterial map={metalTex} color={0xfffffa} emissive={0xffffff} emissiveIntensity={.3} specular={0xffffff} shininess={60} transparent opacity={1} side={THREE.DoubleSide} />
        </Text3D>
      </mesh>
      {/* <mesh position={[-0.5, -0.52, -0.2]} scale={[1, 1, .4]} rotation={new THREE.Euler(0, Math.PI / -2, 0)}>
        <Text3D {...{font:font.data, bevelEnabled:false, bevelSize:.001, bevelSegments:1}}>
          &
          <meshPhongMaterial map={metalTex} color={0xfffffa} emissive={0xffffff} emissiveIntensity={.3} specular={0xffffff} shininess={60} transparent opacity={1} />
          <meshPhongMaterial map={metalTex} color={0xfffffa} emissive={0xffffff} emissiveIntensity={.3} specular={0xffffff} shininess={60} transparent opacity={1} />
        </Text3D>
      </mesh> */}
    </motion.group>

  )

}