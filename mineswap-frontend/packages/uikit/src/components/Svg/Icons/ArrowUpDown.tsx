import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 44 44" {...props}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6808 25.8332C31.3676 26.5772 31.3212 27.7371 30.5772 28.4239L24.1606 34.347C23.4583 34.9952 22.3758 34.9952 21.6735 34.347L15.2568 28.4239C14.5128 27.7371 14.4664 26.5773 15.1532 25.8332C15.8399 25.0892 16.9998 25.0428 17.7438 25.7296L21.0837 28.8126L21.0837 10.9998C21.0837 9.98731 21.9045 9.1665 22.9171 9.1665C23.9296 9.1665 24.7504 9.98731 24.7504 10.9998L24.7504 28.8125L28.0901 25.7296C28.8341 25.0428 29.994 25.0892 30.6808 25.8332Z" fill="#0090FD"/>
    </Svg>
  );
};

export default Icon;
