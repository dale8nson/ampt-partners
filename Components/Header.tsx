import { motion } from "framer-motion"
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { Logo } from '@/Components/Logo'

export const Header = () => {
  return (
    <section className="relative flex-col h-[60vh] lg:h-[80vh] px-0 overflow-hidden w-full mx-0 z-10 justify-center align-middle">
      <div className='relative h-full w-full overflow-hidden bg-[url("/pexels-finn-whelen-6227601-6182776.jpg")] lg:bg-gray-900 bg-[size:170%] bg-fixed lg:bg-cover bg-center'>
        <video className="fixed z-0 px-0 mx-auto w-full h-[60vh] lg:h-[80vh] object-cover content-center" autoPlay loop muted >
          <source src='17920530-uhd_3840_2160_30fps.webm' />
        </video>

      </div>
      <div className="flex absolute flex-col top-0 justify-center  align-middle mx-auto w-full h-[70vh]">
        <Canvas className="w-full !h-[125px] mx-auto opacity-100 lg:!h-[200px] ">
          {/* <PerspectiveCamera makeDefault args={[0.75, 1, 0.01, 10]} /> */}
          <directionalLight position={[0.3, 0.3, 0.3]} intensity={2} />
          {/* <mesh position={[0,-0.1,0]} scale={16} rotation={new THREE.Euler(Math.PI / 2, 0, 0)}>
            <planeGeometry args={[1,1]} />
            <meshPhongMaterial color={0xee0000} shininess={60} transparent opacity={1} />
          </mesh> */}
          <Logo />
        </Canvas>
        <div className="flex justify-center !align-base mx-auto !w-6/12 lg:w-full">
          <motion.div initial={{ x: "100vw", opacity: 0, skewX: "75deg" }} animate={{ x: "0", opacity: 1, skewX: "0deg" }} transition={{ duration: 1, delay: .3 }}>
            <h1 className="text-5xl lg:text-[8.5rem] text-neutral-100  font-bold tracking-tighter !leading-[9rem] !self-start ">AMPT&nbsp;</h1>
          </motion.div>
          <motion.div initial={{ x: "-100vw", opacity: 0, skewX: "-75deg" }} animate={{ x: "0", opacity: 1.2, skewX: "0deg" }} transition={{ duration: 1.2, delay: .3 }}>
            <h1 className="text-5xl lg:text-9xl  text-neutral-100 font-sans !leading-[9rem] !self-baseline tracking-tighter  ">PARTNERS</h1>
          </motion.div>
        </div>
        {/* <motion.div className="w-full mx-0 flex justify-center" initial={{ y: '60vh', opacity: 0, rotateX: "135deg" }} animate={{ y: "0", opacity: 1, rotateX: "0deg" }} transition={{ duration: 1.2, delay: 1.5 }}>
          <h1 className="text-7xl space-x-2 text-neutral-100 font-[powerr]">SOLICITORS</h1>
        </motion.div> */}
      </div>
    </section>)
}