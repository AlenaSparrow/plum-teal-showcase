import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { b as useReducedMotion, m as motion } from "../_libs/framer-motion.mjs";
const avLogoPng = "/assets/av-logo-DnSoUg67.png";
function Reveal({ children, delay = 0, y = 24, className, as = "div" }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tag,
    {
      initial: reduce ? false : { opacity: 0, y },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
      className,
      children
    }
  );
}
export {
  Reveal as R,
  avLogoPng as a
};
