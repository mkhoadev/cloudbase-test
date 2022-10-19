import React, { cloneElement, ElementType, isValidElement } from "react";
import EXTERNAL_LINK_PROPS from "../../util/externalLinkProps";
import StyledButton from "./StyledButton";
import { ButtonProps, scales, variants } from "./types";

const ButtonConnect = <E extends ElementType = "button">(props: ButtonProps<E>): JSX.Element => {
  const { startIcon, endIcon, external, className, isLoading, disabled, children, ...rest } = props;
  const internalProps = external ? EXTERNAL_LINK_PROPS : {};
  const isDisabled = isLoading || disabled;
  const classNames = className ? [className] : [];

  if (isLoading) {
    classNames.push("pancake-button--loading");
  }

  if (isDisabled && !isLoading) {
    classNames.push("pancake-button--disabled");
  }

  return (
    <StyledButton
      $isLoading={isLoading}
      disabled={isDisabled}
      className='imgbutton'
      {...internalProps}
      {...rest}
    >
      <>
        {isValidElement(startIcon) &&
          cloneElement(startIcon, {
            mr: "0.5rem",
          })}
        {children}
        {isValidElement(endIcon) &&
          cloneElement(endIcon, {
            ml: "0.5rem",
          })}
      </>
    </StyledButton>
  );
};

ButtonConnect.defaultProps = {
  isLoading: false,
  external: false,
  variant: variants.PRIMARY,
  scale: scales.MD,
  disabled: false,
};

export default ButtonConnect;
