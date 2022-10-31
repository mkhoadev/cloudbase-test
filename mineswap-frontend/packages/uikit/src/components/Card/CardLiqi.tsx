import React from "react";
import { StyledCard, StyledCardInner } from "./StyledCard";
import { CardProps } from "./types";

const CardLiqi: React.FC<React.PropsWithChildren<CardProps>> = ({ ribbon, children, background, ...props }) => {
  return (
    <StyledCard {...props}>
      <StyledCardInner style={{backgroundImage:'unset', backgroundColor:'var(--colors-textcard)'}} background={background} hasCustomBorder={!!props.borderBackground}>
        {ribbon}
        {children}
      </StyledCardInner>
    </StyledCard>
  );
};
export default CardLiqi;
