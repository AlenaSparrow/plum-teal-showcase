import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { W as WebGLRenderer, S as Scene, P as PerspectiveCamera, I as IcosahedronGeometry, M as MeshBasicMaterial, a as Mesh, C as Clock } from "../_libs/three.mjs";
function HeroOrb({ className }) {
  const mountRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = mountRef.current;
    if (!el) return;
    const w = el.clientWidth;
    const h = el.clientHeight;
    const renderer = new WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.setClearColor(0, 0);
    el.appendChild(renderer.domElement);
    const scene = new Scene();
    const camera = new PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.set(0, 0, 4.5);
    const geoSphere = new IcosahedronGeometry(1.5, 4);
    const matSphere = new MeshBasicMaterial({
      color: 4863583,
      // plum
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const sphere = new Mesh(geoSphere, matSphere);
    scene.add(sphere);
    const geoInner = new IcosahedronGeometry(0.95, 2);
    const matInner = new MeshBasicMaterial({
      color: 14070634,
      // gold
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const inner = new Mesh(geoInner, matInner);
    scene.add(inner);
    const onResize = () => {
      const nw = el.clientWidth;
      const nh = el.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);
    let frameId;
    const clock = new Clock();
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: mountRef, className });
}
export {
  HeroOrb as H
};
