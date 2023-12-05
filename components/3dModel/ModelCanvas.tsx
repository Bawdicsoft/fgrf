"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { PumpModel } from "./PumpModel";

const ModelCanvas = () => {
  return (
    <div className="absolute top-0 left-0 z-10 w-full h-full">
      <Canvas>
        <ambientLight intensity={2} />
        <directionalLight position={[0, 20, 0]} intensity={1} />
        <Suspense>
          <PumpModel />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelCanvas;
