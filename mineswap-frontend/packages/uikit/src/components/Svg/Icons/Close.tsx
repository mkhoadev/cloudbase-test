import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    // <img src="/img/Closebutton.png" style={{height:'20px'}} alt="" />
    <span className="arrowBg-close">
      <span className="arrow arrowLeft-close">
        X
      </span>
    </span>
  );
};

export default Icon;
