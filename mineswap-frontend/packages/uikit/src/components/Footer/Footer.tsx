import React from "react";
import { StyledFooter } from "./styles";
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
  const openInNewTab = (url: any) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <StyledFooter>
      <div style={{ width: "100%", background: "#F8FCFF" }}>
        <div className="frame_footer">
          <div className="group-iEyiFd">
            <div className="group-9-7oP3YL">
              <img src="/img/group_footer.png" width={"135px"} alt="" />
            </div>
          </div>

          <div className="menu-items-iEyiFd">
            <div className="community" onClick={() => openInNewTab("https://mineswap.gitbook.io/mineswap/")}>Community</div>
            <div className="community">Technology</div>
            <div className="community">About us</div>
            <div className="community">Blog</div>
            <div className="community">Careers</div>
            <div className="community">Contact</div>
          </div>
        </div>
        <div className="frame_footer frame_footers">
          <div className="group-iEyiFd group-iEyiFds">
            <span style={{ lineHeight: "100px", color: "#5E6B7E" }}>© 2022 mineswap. All rights reserved.</span>
          </div>
          <div className="icon_footer">
            <img
              src="/img/Community_discord.png"
              onClick={() => openInNewTab("https://discord.gg/nBPtAv7QY6")}
              className="w-6"
              alt="Discord"
            />
            <img
              src="/img/community_telegram.png"
              onClick={() => openInNewTab("https://t.me/MineswapGlobal")}
              className="w-6"
              alt="Telegram channel"
            />
            {/* <img src="/img/telegram.png" onClick={() => openInNewTab("https://t.me/Mineswap_en")} className="w-6" alt="Telegram group" /> */}

            <img
              src="/img/community_twitter.png"
              onClick={() => openInNewTab("https://twitter.com/MineswapGlobal")}
              className="w-6"
              alt="Twitter"
            />
            <img
              src="/img/Community_facebook.png"
              onClick={() => openInNewTab("https://www.facebook.com/MineswapGlobal/")}
              className="w-6"
              alt="Facebook"
            />
            {/* <img src="/img/intagram.png"  className="w-6" alt="Intagram" /> */}
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default MenuItem;
