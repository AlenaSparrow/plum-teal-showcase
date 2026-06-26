import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
function HeroOrb({ className }) {
  const mountRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = mountRef.current;
    if (!el) return;
    let frameId;
    let cleanupFn;
    import("../_libs/three.mjs").then((THREE) => {
      if (!mountRef.current) return;
      const w = el.clientWidth;
      const h = el.clientHeight;
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h);
      renderer.setClearColor(0, 0);
      el.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
      camera.position.set(0, 0, 4.5);
      const geoSphere = new THREE.IcosahedronGeometry(1.5, 4);
      const matSphere = new THREE.MeshBasicMaterial({
        color: 4863583,
        wireframe: true,
        transparent: true,
        opacity: 0.45
      });
      const sphere = new THREE.Mesh(geoSphere, matSphere);
      scene.add(sphere);
      const geoInner = new THREE.IcosahedronGeometry(0.95, 2);
      const matInner = new THREE.MeshBasicMaterial({
        color: 14070634,
        wireframe: true,
        transparent: true,
        opacity: 0.35
      });
      const inner = new THREE.Mesh(geoInner, matInner);
      scene.add(inner);
      const onResize = () => {
        const nw = el.clientWidth;
        const nh = el.clientHeight;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      };
      window.addEventListener("resize", onResize);
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
      cleanupFn = () => {
        cancelAnimationFrame(frameId);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
      };
    });
    return () => cleanupFn?.();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: mountRef, className });
}
export {
  HeroOrb
};
