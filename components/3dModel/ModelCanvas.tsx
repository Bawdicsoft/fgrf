"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { PumpModel } from "./PumpModel";
import { OrbitControls } from "@react-three/drei";
const ModelCanvas = () => {
  return (
    <div className="absolute top-0 left-0 z-[-2] w-full h-full">
      <Canvas>
        <ambientLight intensity={6} />
        <directionalLight position={[0, 20, 20]} intensity={20} />
        <OrbitControls autoRotate />
        <Suspense>
          <PumpModel />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelCanvas;
