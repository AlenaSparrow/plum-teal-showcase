import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
const smartAlertsPreview = "/assets/smart-alerts-preview-BGV3FUEl.png";
const researchPreview = "/assets/research-preview-OsMW_Kqz.png";
const forecastingPreview = "/assets/forecasting-preview-C3RfgfGy.png";
const uworkPreview = "/assets/uwork-preview-uqtMbapL.png";
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
