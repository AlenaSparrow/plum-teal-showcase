import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroOrb({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const w = el.clientWidth;
    const h = el.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // Scene + camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.set(0, 0, 4.5);

    // --- Outer geodesic sphere (wireframe) ---
    const geoSphere = new THREE.IcosahedronGeometry(1.5, 4);
    const matSphere = new THREE.MeshBasicMaterial({
      color: 0x4a365f, // plum
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const sphere = new THREE.Mesh(geoSphere, matSphere);
    scene.add(sphere);

    // --- Inner icosphere (gold) ---
    const geoInner = new THREE.IcosahedronGeometry(0.95, 2);
    const matInner = new THREE.MeshBasicMaterial({
      color: 0xd6b36a, // gold
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const inner = new THREE.Mesh(geoInner, matInner);
    scene.add(inner);

    // Resize handler
    const onResize = () => {
      const nw = el.clientWidth;
      const nh = el.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    // Animation
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      sphere.rotation.y = t * 0.12;
      sphere.rotation.x = t * 0.07;

      inner.rotation.y = t * 0.22;
      inner.rotation.z = -t * 0.09;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className={className} />;
}
