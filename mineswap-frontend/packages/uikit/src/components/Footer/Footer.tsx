import { vars } from "@pancakeswap/ui/css/vars.css";
import React from "react";
import { Box, Flex } from "../Box";
import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledSocialLinks,
  StyledText,
  StyledToolsContainer,
} from "./styles";

import { Button } from "../Button";
import CakePrice from "../CakePrice/CakePrice";
import LangSelector from "../LangSelector/LangSelector";
import { ArrowForwardIcon, LogoWithTextIcon } from "../Svg";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { FooterProps } from "./types";

const MenuItem: React.FC<React.PropsWithChildren<FooterProps>> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  return (
    <StyledFooter>
      <div style={{width:'100%', background:'#27262c'}}>
        <div className="frame_footer">
          <div className="group-iEyiFd">
            <div className="group-9-7oP3YL">
              <img src="/logoMineswaps.png" width={"180px"} alt="" />
            </div>
          </div>
          <div className="menu-items-iEyiFd">
            <div className="community">Community</div>
            <div className="community">Technology</div>
            <div className="community">About us</div>
            <div className="community">Blog</div>
            <div className="community">Careers</div>
            <div className="community">Contact</div>
          </div>
        </div>
        <div className="frame_footer frame_footers">
          <div className="group-iEyiFd group-iEyiFds">
            <span style={{ lineHeight: "100px", color:'white' }}>© 2022 mineswap. All rights reserved.</span>
          </div>
          <div className="icon_footer" >
            <img src="/img/telegram.png" className="w-6" />
            <img src="/img/facebook.png" className="w-6" />
            <img src="/img/twitter.png" className="w-6" />
            <img src="/img/discord.png" className="w-6" />
            <img src="/img/intagram.png" className="w-6" />
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default MenuItem;
