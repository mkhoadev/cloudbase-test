import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
interface LogoProps extends SvgProps {
  isDark?: boolean;
}
const Icon: React.FC<React.PropsWithChildren<LogoProps>> = ({ isDark, ...props }) => {
  return (
    <img src={isDark ? "/logoMineswaps.png" : "/logoMineswap.png" } alt="" className="desktop-icon" />
  );
};

export default Icon;
