"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

export default function PmgHero({
  className = "",
  height = "420px",
}: {
  className?: string;
  height?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene & camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#455a64"); // dark blue-gray backdrop

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 14);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffffff, 1.0);
    key.position.set(6, 8, 6);
    key.castShadow = true;
    key.shadow.mapSize.width = 1024;
    key.shadow.mapSize.height = 1024;
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xc9c2f0, 0.4);
    fill.position.set(-6, 2, -4);
    scene.add(fill);

    // Material — exact purple from your image
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#5e52d4"),
      roughness: 0.25,
      metalness: 0.05,
    });

    // Group that holds the three bars
    const group = new THREE.Group();

    const createBar = (width: number, yPos: number) => {
      // width, height, depth, segments, radius
      const geo = new RoundedBoxGeometry(width, 1.3, 0.8, 12, 0.35);
      const mesh = new THREE.Mesh(geo, material);
      mesh.position.y = yPos;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      return mesh;
    };

    // Top (widest), Middle, Bottom (narrowest) — spacing 2.0 units apart
    group.add(createBar(5.4, 2.0));
    group.add(createBar(3.8, 0.0));
    group.add(createBar(2.2, -2.0));

    scene.add(group);

    // Ground plane for soft contact shadow
    const planeGeo = new THREE.PlaneGeometry(20, 20);
    const planeMat = new THREE.ShadowMaterial({ opacity: 0.25 });
    const plane = new THREE.Mesh(planeGeo, planeMat);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -3.2;
    plane.receiveShadow = true;
    scene.add(plane);

    // Auto-rotate loop
    let animId = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      group.rotation.y += 0.006; // gentle spin on its own
      group.rotation.x = Math.sin(Date.now() * 0.0008) * 0.08; // tiny bob
      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: "100%",
        height: height,
        borderRadius: "16px",
        overflow: "hidden",
      }}
    />
  );
}