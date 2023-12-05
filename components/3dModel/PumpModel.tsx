"use client";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

export function PumpModel(props: any) {
  const { nodes, materials }: any = useGLTF("./3dModel/scene.gltf");
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
    t1.to(camera.position, { x: -2.5 }, "key1")
      .to(scene.rotation, { y: 2.5 }, "key1")
      .to(camera.position, { y: 3.5 }, "key1");
  }, []);
  return (
    <group {...props} dispose={null} scale={0.3} position={[0, 1, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <lineSegments
          geometry={nodes.Object_2.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials["Material.004"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./3dModel/scene.gltf");
