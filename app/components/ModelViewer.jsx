// components/ModelViewer.jsx
"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";
import ProductModel from "./ProductModel";

export default function ModelViewer() {
  return (
    <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <ProductModel />
        <Environment preset="studio" />
        <ContactShadows position={[0, -0.8, 0]} opacity={0.35} scale={10} blur={1.5} />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
    </Canvas>
  );
}
