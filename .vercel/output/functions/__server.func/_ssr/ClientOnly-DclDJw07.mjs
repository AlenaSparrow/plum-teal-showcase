import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
const smartAlertsPreview = "/assets/smart-alerts-preview-3P2hL9ci.jpg";
const researchPreview = "/assets/research-preview-DTwXdni2.jpg";
const forecastingPreview = "/assets/forecasting-preview-774ib8Gm.jpg";
const uworkPreview = "/assets/uwork-preview-DqMANtpb.jpg";
function ClientOnly({ children }) {
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
}
export {
  ClientOnly as C,
  forecastingPreview as f,
  researchPreview as r,
  smartAlertsPreview as s,
  uworkPreview as u
};
