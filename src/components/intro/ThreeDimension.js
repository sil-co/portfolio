import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef} from "react";
import Controls from "./Controls";
import {Stars} from "@react-three/drei";

// const Thing = () => {
//   const ref = useRef({});
//   useFrame(() => (ref.current.rotation.z += 0.01));
//   return (
//       <mesh
//         ref={ref}
//         onClick={(e) => console.log("clicked")}
//         onPointerOver={(e) => console.log("hovered")}
//         onPointerOut={(e) => console.log("unhovered")}
//       >
//         <planeBufferGeometry attach="geometry" args={[1,1]} />
//         <meshBasicMaterial
//           attach="material"
//           color="hotpink"
//           opacity={0.5}
//           transparent
//         />
//       </mesh>
//   )
// }

const Torus = () => {
  const ref = useRef({});
  useFrame(() => {
    ref.current.rotation.y += 0.007;
    ref.current.rotation.x += 0.007;
  });
  return (
      <mesh ref={ref}>
        <torusGeometry args={[2,0.1,18,100]} />
        <meshStandardMaterial color="#87ccff" wireframe />
      </mesh>
  )
}

const Torus2 = () => {
  const ref = useRef({});
  useFrame(() => {
    // ref.current.rotation.z += 0.01;
    ref.current.rotation.y += 0.0075;
    ref.current.rotation.x += 0.0075;
  });
  return (
      <mesh ref={ref} >
        <torusGeometry args={[2,0.1,18,100]} />
        <meshStandardMaterial color="#87ccff" wireframe />
      </mesh>
  )
}

const Torus3 = () => {
  const ref = useRef({});
  useFrame(() => {
    ref.current.rotation.y += 0.008;
    ref.current.rotation.x += 0.008;
  });
  return (
      <mesh ref={ref} >
        <torusGeometry args={[2,0.1,18,100]} />
        <meshStandardMaterial color="#87ccff" wireframe />
      </mesh>
  )
}

const Torus4 = () => {
  const ref = useRef({});
  useFrame(() => {
    ref.current.rotation.y += 0.0085;
    ref.current.rotation.x += 0.0085;
  });
  return (
      <mesh ref={ref} >
        <torusGeometry args={[2,0.1,18,100]} />
        <meshStandardMaterial color="#87ccff" wireframe />
      </mesh>
  )
}

const Torus5 = () => {
  const ref = useRef({});
  useFrame(() => {
    ref.current.rotation.y += 0.009;
    ref.current.rotation.x += 0.009;
  });
  return (
      <mesh ref={ref} >
        <torusGeometry args={[2,0.1,18,100]} />
        <meshStandardMaterial color="#87ccff" wireframe />
      </mesh>
  )
}

const SpherePrac = () => {
  const ref = useRef({});
  useFrame(() => {
    ref.current.rotation.x += 0.1;
    ref.current.rotation.y += 0.1;
  });
  return (
    <mesh
      ref={ref}
      visible
      userData={{ hello: 'world' }}
      // position={[1, 2, 3]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial color="#87ccff"  transparent />
    </mesh>
  )
}

const ThreeDimension = () => {
  return (
    <div style={{width: "100vw", height: "60vh"}}>
      <Canvas>
        <Stars />
        <Torus />
        <Torus2 />
        <Torus3 />
        <Torus4 />
        <Torus5 />
        <SpherePrac />
        <Controls />
        {/* <gridHelper /> */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10,15,10]} angle={0.3} />
      </Canvas>
    </div>
  )
}

export default ThreeDimension;
