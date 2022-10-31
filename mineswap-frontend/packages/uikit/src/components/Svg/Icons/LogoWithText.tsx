import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<React.PropsWithChildren<LogoProps>> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <img src={!isDark ? "/img/favicon.png" : "/img/favicon-light.png" } alt="MineSwap" className="mobile-icon" />
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
