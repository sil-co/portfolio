import React, { useRef } from "react";
import {
  extend,
  ReactThreeFiber,
  useThree,
  useFrame,
} from "@react-three/fiber";
import { OrbitControls, Stars } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

export default function Controls(props) {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef({});
  useFrame(() => controls.current.update());
  return (
    <orbitControls {...props} ref={controls} args={[camera, domElement]} />
  );
}
