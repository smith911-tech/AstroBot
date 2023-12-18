import logo from "./assets/AstroLogo.png";
// ! Page Loading
import { useEffect } from "react";
export default function Preloader() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#13072E]  preloader select-none">
      <img src={logo} alt="Logo" className="preloader-logo" loading="lazy" />
    </div>
  );
}
