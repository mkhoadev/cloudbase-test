import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 1000 1000" {...props}>
    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
    <g><path d="M417.2,91.8C281.5,200.6,145.8,309.5,10.1,418.4c326.6,0,653.1,0,979.7,0c-0.6-41.1,1.3-82.4-1-123.5c-6.6-38.6-48.1-42.1-79.5-39.8c-164,0-328.1,0-492.1,0C417.2,200.6,417.2,146.2,417.2,91.8z M10.1,581.6c0.6,41.1-1.3,82.4,1,123.5c6.6,38.6,48.1,42.1,79.5,39.8c164,0,328.1,0,492.1,0c0,54.4,0,108.9,0,163.3c135.7-108.9,271.4-217.7,407.1-326.6C663.3,581.6,336.7,581.6,10.1,581.6z" fill="#BDC2C4"/></g>
  </Svg>
  );
};

export default Icon;
