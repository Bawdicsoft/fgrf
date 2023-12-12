"use client";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export function PumpModel(props: any) {
  const group = useRef();
  const { nodes, materials }: any = useGLTF("./3dModel/hand.glb");
  gsap.registerPlugin(ScrollTrigger);
  let scene = useThree((state) => state.scene);
  let camera = useThree((state) => state.camera);
  useLayoutEffect(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#modalStart",
        start: "top top",
        end: "top-=50px top",
        markers: false,
        endTrigger: "#modalEnd",
        scrub: 1,
      },
    });
    t1.to(camera.position, { x: -16.5 }, "key1").to(
      camera.position,
      { y: 15.5 },
      "key1"
    );
  }, []);
  return (
    <group ref={group} {...props} dispose={null} position={[14, 8, 1]}>
      <group name="Scene" scale={100}>
        <group
          name="Camera001Target"
          position={[-0.107, 0, -0.278]}
          scale={0.025}
        />
        <group
          name="VRayLight002"
          position={[-0.151, -0.015, -0.15]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.025}
        />
        <group
          name="VRayLight003"
          position={[-0.151, -0.015, -0.281]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={0.025}
        />
        <group
          name="polySurface52"
          position={[-0.146, -0.121, -0.227]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.025}
        >
          <group name="polySurface53" position={[0.602, 0.139, 4.034]}>
            <group
              name="transform127"
              position={[5.144, 8.798, -8.815]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={39.37}
            />
          </group>
          <group name="polySurface57" position={[0.602, 0.139, 4.034]}>
            <group
              name="transform114"
              position={[5.144, 8.798, -8.815]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={39.37}
            />
          </group>
          <group name="polySurface60" position={[0.602, 0.139, 4.034]}>
            <group
              name="transform118"
              position={[5.144, 8.798, -8.815]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={39.37}
            />
          </group>
          <group name="polySurface62" position={[0.602, 0.139, 4.034]}>
            <group
              name="transform119"
              position={[5.144, 8.798, -8.815]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={39.37}
            />
          </group>
          <group name="polySurface63" position={[0.602, 0.139, 4.034]}>
            <group
              name="transform120"
              position={[5.144, 8.798, -8.815]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={39.37}
            />
          </group>
          <group name="polySurface65" position={[0.602, 0.139, 4.034]}>
            <group
              name="transform123"
              position={[5.144, 8.798, -8.815]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={39.37}
            />
          </group>
          <group name="polySurface66" position={[0.602, 0.139, 4.034]}>
            <group
              name="transform124"
              position={[5.144, 8.798, -8.815]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={39.37}
            />
          </group>
          <group name="polySurface68" position={[0.602, 0.139, 4.034]}>
            <group
              name="transform125"
              position={[5.144, 8.798, -8.815]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={39.37}
            />
          </group>
          <group name="polySurface69" position={[0.602, 0.139, 4.034]}>
            <group
              name="transform115"
              position={[5.144, 8.798, -8.815]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={39.37}
            />
          </group>
          <group name="polySurface71" position={[0.602, 0.139, 4.034]}>
            <group
              name="transform121"
              position={[5.144, 8.798, -8.815]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={39.37}
            />
          </group>
          <group name="polySurface72" position={[0.602, 0.139, 4.034]}>
            <group
              name="transform122"
              position={[5.144, 8.798, -8.815]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={39.37}
            />
          </group>
          <group name="polySurface76" position={[0.602, 0.139, 4.034]}>
            <group
              name="transform116"
              position={[5.144, 8.798, -8.815]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={39.37}
            />
          </group>
          <group name="polySurface79" position={[0.602, 0.139, 4.034]}>
            <group
              name="transform117"
              position={[5.144, 8.798, -8.815]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={39.37}
            />
          </group>
          <group name="polySurface88" position={[0.602, 0.139, 4.034]}>
            <group
              name="transform126"
              position={[5.144, 8.798, -8.815]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={39.37}
            />
          </group>
          <group
            name="transform77"
            position={[5.746, 8.937, -4.782]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={39.37}
          />
        </group>
        <mesh
          name="polySurface61"
          castShadow
          receiveShadow
          geometry={nodes.polySurface61.geometry}
          material={materials["01 - Default"]}
          position={[0.011, -0.121, -0.227]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.025}
        />
        <group name="transform128" />
        <group name="transform129" />
        <group
          name="VRayLight001"
          position={[-0.145, 0.093, -0.216]}
          scale={0.025}
        />
        <mesh
          name="Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["01 - Defaultas"]}
          position={[-0.149, -0.047, -0.216]}
          scale={0.008}
        />
        <mesh
          name="Cylinder002"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials["01 - Defaultas"]}
          position={[-0.149, -0.046, -0.216]}
          scale={0.008}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./3dModel/hand.glb");
