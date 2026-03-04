// components/ProductModel.jsx
"use client";
import { useGLTF } from "@react-three/drei";

export default function ProductModel() {
  const { scene } = useGLTF("/models/suncream.glb"); // Place your model in /public/models
  return <primitive object={scene} scale={1.5} />;
}
