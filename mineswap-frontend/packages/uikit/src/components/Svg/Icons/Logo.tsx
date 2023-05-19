import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import styled from "styled-components";
interface LogoProps extends SvgProps {
  isDark?: boolean;
}

const CsSvg = styled(Svg)`
  width: 102px;
  height: 90.3px;
  @media screen and (max-width: 600px) {
    width: 60px;
    height: auto;
  }
`;

const Icon: React.FC<React.PropsWithChildren<LogoProps>> = ({ isDark, ...props }) => {
  return (
    <CsSvg viewBox="0 0 102 91">
      <path d="M5.2217 78.1162C3.62038 78.1162 2.36717 77.7217 1.46207 76.9559C0.556978 76.19 0.0696241 75.0528 0.023209 73.5908C0.023209 73.2891 0 72.8017 0 72.1287C0 71.4325 1.41613e-06 70.9451 0.023209 70.6202C0.0696241 69.1813 0.55698 68.0442 1.48528 67.2783C2.41358 66.5125 3.64359 66.0947 5.2217 66.0947C6.21962 66.0947 7.10151 66.2572 7.89057 66.5821C8.67963 66.907 9.30623 67.3711 9.74717 67.9745C10.2113 68.5779 10.4434 69.3206 10.4666 70.156C10.4666 70.2489 10.4202 70.3417 10.3506 70.4113C10.2809 70.4809 10.1881 70.5042 10.0953 70.5042H7.72811C7.56566 70.5042 7.44962 70.4809 7.38 70.4113C7.31038 70.3417 7.24076 70.2257 7.19434 70.0632C7.03189 69.5062 6.79981 69.1349 6.47491 68.926C6.15 68.7172 5.73227 68.6011 5.2217 68.6011C3.96849 68.6011 3.31868 69.2974 3.27227 70.713C3.27227 71.0147 3.24906 71.4789 3.24906 72.1055C3.24906 72.7321 3.24906 73.1962 3.27227 73.5211C3.31868 74.9136 3.96849 75.633 5.2217 75.633C5.73227 75.633 6.15 75.517 6.47491 75.3081C6.79981 75.076 7.03189 74.7047 7.19434 74.171C7.24076 74.0085 7.31038 73.8925 7.38 73.8228C7.44962 73.7532 7.56566 73.73 7.72811 73.73H10.0953C10.1881 73.73 10.2809 73.7532 10.3506 73.8228C10.4202 73.8925 10.4666 73.9621 10.4666 74.0781C10.4434 74.9136 10.2113 75.633 9.74717 76.2596C9.28302 76.863 8.67963 77.3504 7.89057 77.6521C7.10151 77.9538 6.21962 78.1162 5.2217 78.1162Z" fill="white"/>
      <path d="M12.207 77.4668V67.6732C12.207 67.4644 12.2534 67.2555 12.3231 67.0931C12.3927 66.9306 12.5087 66.7681 12.648 66.6521C12.7872 66.5361 12.9497 66.4432 13.1121 66.3504C13.2746 66.2808 13.4602 66.2344 13.6459 66.2344H14.9455C15.0616 66.2344 15.1544 66.2808 15.224 66.3504C15.2936 66.42 15.3401 66.5361 15.3401 66.6521V74.7516C15.3401 74.8444 15.3865 74.9604 15.4793 75.0764C15.5721 75.2157 15.6882 75.2621 15.8738 75.2621H20.3529C20.4689 75.2621 20.585 75.3085 20.6546 75.3782C20.7474 75.4478 20.7706 75.5638 20.7706 75.6799V77.4436C20.7706 77.5829 20.7242 77.6757 20.6546 77.7453C20.5617 77.8149 20.4689 77.8614 20.3529 77.8614H12.6248C12.5319 77.8614 12.4391 77.8149 12.3463 77.7221C12.2534 77.6757 12.207 77.5829 12.207 77.4668Z" fill="white"/>
      <path d="M26.9209 78.1165C25.3428 78.1165 24.0896 77.722 23.1845 76.9561C22.2794 76.1903 21.7921 75.0531 21.7224 73.5678C21.7224 73.2661 21.6992 72.7788 21.6992 72.129C21.6992 71.4791 21.6992 70.9918 21.7224 70.6669C21.7688 69.2048 22.2562 68.0676 23.1845 67.2554C24.1128 66.4663 25.366 66.0718 26.9209 66.0718C28.4758 66.0718 29.7058 66.4663 30.6341 67.2554C31.5624 68.0444 32.0498 69.1816 32.0962 70.6669C32.1194 71.3167 32.1194 71.8041 32.1194 72.129C32.1194 72.4539 32.1194 72.9412 32.0962 73.5678C32.0498 75.0531 31.5624 76.1903 30.6573 76.9561C29.729 77.722 28.499 78.1165 26.9209 78.1165ZM26.9209 75.6101C27.5011 75.6101 27.9653 75.4244 28.3134 75.0763C28.6615 74.7282 28.8471 74.1944 28.8704 73.475C28.8936 72.8252 28.8936 72.361 28.8936 72.0825C28.8936 71.804 28.8936 71.3631 28.8704 70.7365C28.8471 70.0171 28.6615 69.4833 28.3134 69.1352C27.9653 68.7871 27.5011 68.6014 26.9209 68.6014C26.3407 68.6014 25.8534 68.7871 25.5285 69.1352C25.1804 69.4833 24.9947 70.0171 24.9715 70.7365C24.9715 71.0382 24.9483 71.5024 24.9483 72.0825C24.9483 72.6859 24.9483 73.1501 24.9715 73.475C24.9947 74.1944 25.1804 74.7282 25.5285 75.0763C25.8534 75.4244 26.3175 75.6101 26.9209 75.6101Z" fill="white"/>
      <path d="M33.9526 73.5208V67.7421C33.9526 67.51 33.9991 67.3011 34.0919 67.1155C34.1847 66.9298 34.3008 66.7906 34.44 66.6746C34.5792 66.5585 34.7417 66.4657 34.9041 66.3961C35.0666 66.3264 35.2523 66.3032 35.3915 66.3032H36.6447C36.7608 66.3032 36.8768 66.3496 36.9464 66.4193C37.016 66.4889 37.0625 66.6049 37.0625 66.721V73.4976C37.0625 74.1242 37.2017 74.6347 37.5034 75.0061C37.8051 75.3774 38.2692 75.563 38.9423 75.563C39.6153 75.563 40.1026 75.3774 40.3811 75.0061C40.6828 74.6347 40.8221 74.1474 40.8221 73.4976V67.7421C40.8221 67.51 40.8685 67.3011 40.9613 67.1155C41.0542 66.9298 41.1702 66.7906 41.3094 66.6746C41.4487 66.5585 41.6111 66.4657 41.7736 66.3961C41.936 66.3496 42.0985 66.3032 42.2609 66.3032H43.5142C43.6302 66.3032 43.7462 66.3496 43.8158 66.4193C43.9087 66.4889 43.9319 66.6049 43.9319 66.721V73.5208C43.9319 74.3098 43.8158 74.9829 43.5838 75.563C43.3517 76.1432 43.0036 76.6074 42.5626 76.9787C42.1217 77.35 41.6111 77.6285 40.9845 77.8142C40.3579 77.9998 39.6849 78.0927 38.9191 78.0927C38.1764 78.0927 37.4802 77.9998 36.8536 77.8142C36.227 77.6285 35.6932 77.35 35.2523 76.9787C34.8113 76.6074 34.4632 76.12 34.2311 75.5398C34.0687 74.9828 33.9526 74.3098 33.9526 73.5208Z" fill="white"/>
      <path d="M46.1831 77.5127V67.7423C46.1831 67.3246 46.3223 66.9765 46.624 66.698C46.9257 66.4195 47.2507 66.2803 47.6452 66.2803H50.9871C51.7297 66.2803 52.4259 66.3731 53.0525 66.5356C53.6791 66.698 54.2361 66.9765 54.7003 67.3478C55.1644 67.7191 55.5357 68.1833 55.8142 68.7635C56.0927 69.3437 56.232 70.0167 56.2552 70.8057C56.2552 70.9682 56.2784 71.1539 56.2784 71.3627C56.2784 71.5716 56.2784 71.8269 56.2784 72.0822C56.2784 72.3374 56.2784 72.5695 56.2784 72.7784C56.2784 72.9873 56.2784 73.1729 56.2552 73.3354C56.1624 76.3756 54.445 77.9073 51.1031 77.9073H46.6473C46.5312 77.9073 46.4152 77.8608 46.3456 77.7912C46.2295 77.7448 46.1831 77.652 46.1831 77.5127ZM50.9639 75.4473C51.6833 75.4473 52.2171 75.2616 52.542 74.9135C52.8669 74.5654 53.0293 74.0316 53.0525 73.3354C53.0525 73.1729 53.0758 72.9873 53.0758 72.8016C53.0758 72.5927 53.0758 72.3606 53.0758 72.1054C53.0758 71.8501 53.0758 71.618 53.0758 71.4091C53.0758 71.2003 53.0525 71.0146 53.0525 70.8754C53.0293 69.4829 52.3099 68.7867 50.8942 68.7867H48.3878C48.6431 68.7867 48.852 68.8795 49.0376 69.0652C49.2233 69.2508 49.3161 69.4365 49.3161 69.6686V74.9367C49.3161 75.0759 49.3625 75.2152 49.4554 75.308C49.5482 75.4008 49.6642 75.4473 49.8267 75.4473H50.9639Z" fill="white"/>
      <path d="M58.2046 77.4668V67.6964C58.2046 67.4412 58.251 67.2323 58.3438 67.0466C58.4367 66.861 58.5527 66.7217 58.692 66.6057C58.8312 66.4897 58.9936 66.3968 59.1793 66.3272C59.3418 66.2808 59.5042 66.2344 59.6667 66.2344H63.7744C64.3314 66.2344 64.8884 66.2808 65.3757 66.3968C65.8863 66.5129 66.3272 66.6753 66.6986 66.9306C67.0699 67.1859 67.3716 67.534 67.6037 67.9517C67.8357 68.3695 67.9286 68.9032 67.9286 69.5531C67.9286 70.0404 67.8125 70.4582 67.5804 70.8527C67.3484 71.2472 67.0003 71.5489 66.5825 71.781C67.0931 71.9899 67.4876 72.3148 67.7661 72.8021C68.0446 73.2895 68.1838 73.8 68.1838 74.3106C68.1838 74.9604 68.0678 75.4942 67.8357 75.9583C67.6037 76.3993 67.302 76.7706 66.9074 77.0491C66.5129 77.3276 66.072 77.5365 65.5382 77.6757C65.0276 77.8149 64.4706 77.8614 63.8904 77.8614H58.5991C58.4831 77.8614 58.3903 77.8149 58.2974 77.7453C58.2278 77.6757 58.2046 77.5829 58.2046 77.4668ZM63.4031 70.8527C63.7744 70.8527 64.0993 70.7598 64.3314 70.551C64.5635 70.3421 64.6795 70.0404 64.6795 69.6459C64.6795 69.2514 64.5635 68.9729 64.3314 68.764C64.0993 68.5783 63.7976 68.4623 63.4263 68.4623H60.4093C60.6646 68.4623 60.8735 68.5551 61.0591 68.7408C61.2448 68.9264 61.3376 69.1353 61.3376 69.3442V70.3421C61.3376 70.4349 61.384 70.551 61.4769 70.667C61.5697 70.7831 61.6857 70.8295 61.8482 70.8295H63.4031V70.8527ZM63.5655 75.6334C63.9601 75.6334 64.285 75.5174 64.5402 75.3085C64.7955 75.0764 64.9116 74.7748 64.9116 74.357C64.9116 73.9625 64.7723 73.6376 64.517 73.4055C64.2618 73.1734 63.9369 73.0574 63.5423 73.0574H60.3861C60.6414 73.0574 60.8503 73.1502 61.0359 73.3359C61.2216 73.5215 61.3144 73.7304 61.3144 73.9393V75.1693C61.3144 75.2853 61.3608 75.4014 61.4304 75.4942C61.5233 75.6102 61.6393 75.6566 61.8018 75.6566H63.5655V75.6334Z" fill="white"/>
      <path d="M69.1124 77.8374C69.0427 77.7446 69.0195 77.6749 69.0195 77.5821C69.0195 77.4893 69.0195 77.4428 69.0427 77.4428L72.9184 66.7906C73.0344 66.4657 73.2665 66.3032 73.5914 66.3032H76.1907C76.5156 66.3032 76.7476 66.4657 76.8637 66.7906L80.7393 77.4428C80.7393 77.4661 80.7625 77.5125 80.7625 77.5821C80.7625 77.6749 80.7161 77.7446 80.6465 77.8142C80.5769 77.8838 80.4841 77.9302 80.4144 77.9302H78.2561C77.9776 77.9302 77.792 77.8142 77.6991 77.5589L76.8405 75.1917C76.4459 75.3542 76.0282 75.4702 75.6105 75.5862C75.1927 75.6791 74.7982 75.7719 74.4269 75.8183C74.0324 75.8647 73.6842 75.9112 73.3593 75.9112C73.0344 75.9344 72.7327 75.9344 72.5007 75.9344C72.3382 75.9344 72.2222 75.9344 72.1061 75.9344C71.9901 75.9344 71.9205 75.9344 71.8741 75.9112C72.0829 75.9344 72.2454 76.0504 72.3614 76.2361C72.5007 76.4217 72.5007 76.6538 72.4078 76.9091L72.1758 77.5357C72.0829 77.791 71.8973 77.907 71.6188 77.907H69.4605C69.2748 77.9302 69.182 77.907 69.1124 77.8374ZM73.3593 73.5672C73.661 73.544 73.9859 73.4976 74.3341 73.4511C74.6125 73.4047 74.9375 73.3351 75.2392 73.2655C75.5641 73.1727 75.8657 73.0566 76.1442 72.9174L74.8678 69.2506L73.3593 73.5672Z" fill="white"/>
      <path d="M91.5306 74.403C91.5306 75.076 91.3682 75.6562 91.0433 76.1204C90.7184 76.5845 90.3238 76.9559 89.8365 77.2576C89.3491 77.536 88.7921 77.7449 88.1887 77.8842C87.5854 78.0234 87.0052 78.0698 86.425 78.0698C85.868 78.0698 85.311 78.0234 84.7308 77.9074C84.1506 77.7913 83.6169 77.6057 83.1295 77.3504C82.6421 77.0951 82.2244 76.747 81.8995 76.3061C81.5746 75.8883 81.3889 75.3545 81.3657 74.7047C81.3657 74.6119 81.4121 74.5191 81.4818 74.4494C81.5514 74.3798 81.6442 74.3566 81.7371 74.3566H83.965C84.0346 74.3566 84.081 74.3566 84.1506 74.3798C84.197 74.3798 84.2435 74.403 84.2899 74.4262C84.3595 74.4726 84.4523 74.5423 84.5684 74.6583C84.754 75.0064 85.0093 75.2617 85.3574 75.3777C85.7055 75.517 86.0769 75.5634 86.4482 75.5634C86.6106 75.5634 86.7963 75.5634 87.0284 75.5402C87.2372 75.517 87.4461 75.4706 87.6318 75.401C87.8174 75.3313 87.9799 75.2153 88.1191 75.076C88.2584 74.9368 88.328 74.7511 88.328 74.5423C88.328 74.2406 88.212 74.0317 88.0031 73.8925C87.771 73.7532 87.5389 73.6604 87.3069 73.5675C87.1212 73.4979 86.8891 73.4283 86.6338 73.3819C86.3786 73.3123 86.0769 73.2659 85.7288 73.1962C85.2182 73.1034 84.7308 72.9642 84.2435 72.8017C83.7561 72.6392 83.3384 72.4304 82.967 72.1519C82.5957 71.8734 82.294 71.5485 82.0619 71.1308C81.8299 70.713 81.7138 70.2257 81.7138 69.6455C81.7138 68.9028 81.9227 68.2762 82.3172 67.7425C82.735 67.2087 83.2455 66.8142 83.9186 66.5357C84.638 66.2572 85.4503 66.0947 86.3786 66.0947C86.7499 66.0947 87.1212 66.1179 87.5157 66.1875C87.9103 66.2572 88.3048 66.35 88.6761 66.4892C89.0474 66.6285 89.3955 66.8142 89.7204 67.0462C90.0453 67.2783 90.3238 67.5568 90.5559 67.8817C90.9272 68.3691 91.1361 68.8564 91.1825 69.367C91.1825 69.4598 91.1361 69.5294 91.0665 69.6223C90.9969 69.6919 90.904 69.7383 90.8344 69.7383H88.4904C88.2584 69.7383 88.0727 69.6455 87.9335 69.4366C87.8638 69.2045 87.7014 68.9957 87.4229 68.8332C87.1212 68.6708 86.7731 68.6011 86.3786 68.6011C86.2161 68.6011 86.0304 68.6011 85.868 68.6243C85.7055 68.6475 85.5431 68.694 85.3806 68.7636C85.2414 68.8332 85.1254 68.9493 85.0325 69.0653C84.9397 69.2045 84.8933 69.367 84.8933 69.5526C84.8933 69.8543 85.0557 70.1096 85.4038 70.2953C85.7287 70.4809 86.3553 70.6666 87.2836 70.8523C87.8174 70.9451 88.328 71.0611 88.8386 71.2004C89.3491 71.3396 89.8133 71.5485 90.2078 71.8038C90.6023 72.0591 90.9272 72.384 91.1825 72.8017C91.3914 73.2426 91.5306 73.7532 91.5306 74.403Z" fill="white"/>
      <path d="M93.1782 77.4898V67.7194C93.1782 67.3017 93.3175 66.9536 93.6192 66.6751C93.8977 66.3966 94.2458 66.2573 94.6403 66.2573H101.463C101.579 66.2573 101.695 66.3037 101.765 66.3734C101.858 66.4662 101.881 66.559 101.881 66.6751V68.3228C101.881 68.4388 101.835 68.5317 101.765 68.6013C101.695 68.6709 101.579 68.7173 101.44 68.7173H95.2669C95.5454 68.7173 95.7543 68.8102 95.9167 68.9958C96.0792 69.1815 96.172 69.3903 96.172 69.6224V70.3186C96.172 70.4347 96.2184 70.5507 96.288 70.6668C96.3809 70.7828 96.4969 70.8292 96.6594 70.8292H100.303C100.419 70.8292 100.535 70.8756 100.605 70.9453C100.697 71.0381 100.721 71.1309 100.721 71.2469V72.7554C100.721 72.8715 100.674 72.9875 100.605 73.0571C100.512 73.15 100.419 73.1732 100.303 73.1732H95.2437C95.499 73.1732 95.7078 73.266 95.8935 73.4517C96.0792 73.6373 96.172 73.823 96.172 74.0551V74.8441C96.172 74.9602 96.2184 75.0762 96.3112 75.1922C96.4041 75.3083 96.5201 75.3547 96.6826 75.3547H101.556C101.835 75.3547 101.997 75.4939 101.997 75.7956V77.4434C101.997 77.5826 101.951 77.6754 101.881 77.7451C101.788 77.8147 101.695 77.8611 101.579 77.8611H93.596C93.4799 77.8611 93.3871 77.8147 93.2943 77.7451C93.2246 77.6986 93.1782 77.6058 93.1782 77.4898Z" fill="white"/>
      <path d="M23.417 85.0327V85.5201H20.8409V87.7016H23.0224V88.1889H20.8409V90.881H20.2607V85.0327H23.417Z" fill="white"/>
      <path d="M29.1261 85.0327V90.881H28.5459V85.0327H29.1261Z" fill="white"/>
      <path d="M39.0356 90.881H38.4555L35.2296 85.961V90.881H34.6494V85.0327H35.2296L38.4555 89.9295V85.0327H39.0356V90.881Z" fill="white"/>
      <path d="M47.9244 89.4885H45.2788L44.7682 90.881H44.1416L46.2767 85.1255H46.9265L49.0384 90.881H48.4118L47.9244 89.4885ZM47.762 89.0011L46.6016 85.8449L45.4412 89.0011H47.762Z" fill="white"/>
      <path d="M58.5762 90.881H57.996L54.7701 85.961V90.881H54.1899V85.0327H54.7701L57.996 89.9295V85.0327H58.5762V90.881Z" fill="white"/>
      <path d="M64.1926 86.4018C64.4479 85.9376 64.796 85.5895 65.2137 85.3342C65.6547 85.0789 66.142 84.9629 66.6758 84.9629C67.3256 84.9629 67.8826 85.1253 68.3468 85.427C68.8109 85.7287 69.159 86.1697 69.3679 86.7267H68.6717C68.5092 86.3321 68.2539 86.0304 67.9058 85.7984C67.5577 85.5663 67.14 85.4735 66.6758 85.4735C66.2581 85.4735 65.8636 85.5663 65.5154 85.7752C65.1673 85.984 64.912 86.2625 64.7032 86.6338C64.5175 87.0052 64.4015 87.4461 64.4015 87.9335C64.4015 88.4208 64.4943 88.8618 64.7032 89.2331C64.8888 89.6044 65.1673 89.8829 65.5154 90.0918C65.8636 90.3006 66.2349 90.3935 66.6758 90.3935C67.1632 90.3935 67.5809 90.2774 67.9058 90.0686C68.2539 89.8597 68.5092 89.5348 68.6717 89.1635H69.3679C69.159 89.7204 68.8109 90.1614 68.3468 90.4631C67.8826 90.7648 67.3256 90.9272 66.6758 90.9272C66.142 90.9272 65.6547 90.8112 65.2137 90.5559C64.7728 90.3006 64.4479 89.9525 64.1926 89.4884C63.9373 89.0474 63.8213 88.5136 63.8213 87.9567C63.8213 87.3997 63.9373 86.8659 64.1926 86.4018Z" fill="white"/>
      <path d="M75.2858 85.4966V87.6781H77.4905V88.1655H75.2858V90.3702H77.7458V90.8576H74.7056V85.0093H77.7458V85.4966H75.2858Z" fill="white"/>
      <path d="M33.4885 19.4943C35.2987 11.2325 42.6555 5.05924 51.4511 5.05924C60.2236 5.05924 67.5572 11.2092 69.3906 19.4247C70.0636 19.3319 70.7366 19.2855 71.3864 19.2855H71.5024C71.8738 19.2855 72.2219 19.2855 72.5932 19.3087C73.2662 19.3319 73.916 19.4015 74.5891 19.5176C72.7092 8.44755 63.0549 0 51.4743 0C39.917 0 30.309 8.40114 28.3828 19.4015C29.1022 19.3319 29.8217 19.2855 30.5411 19.2855C31.5158 19.2855 32.5138 19.3551 33.4885 19.4943Z" fill="white"/>
      <path d="M85.4731 27.5238C82.108 23.7874 77.4897 21.5827 72.4768 21.3274C72.1519 21.3042 71.827 21.3042 71.5021 21.3042H71.3861C70.5274 21.3042 69.6223 21.397 68.694 21.5827C64.8183 22.3485 61.2212 24.5068 58.5987 27.6399L40.7753 48.9212C38.1065 52.1006 34.2772 53.9108 30.3087 53.8412C30.1463 53.8412 29.9838 53.8412 29.7981 53.818C22.7663 53.4699 17.034 47.668 16.7787 40.6129C16.6395 36.8301 18.0087 33.2561 20.608 30.5408C23.2304 27.8255 26.7348 26.3402 30.5408 26.3402C35.2751 26.3402 39.5453 28.7306 42.0749 32.6295C42.5391 33.2793 43.2817 33.697 44.1404 33.697C45.5329 33.697 46.67 32.5599 46.67 31.1674C46.67 30.5176 46.4148 29.9142 46.0202 29.4733C42.5159 24.9478 36.4587 21.3274 30.5408 21.3042C25.3887 21.3042 20.5615 23.3465 16.9876 27.0597C13.4136 30.7729 11.557 35.6697 11.7427 40.8218C12.114 50.4761 19.9349 58.4131 29.5661 58.8772C29.7981 58.9004 30.0302 58.9004 30.2623 58.9004C30.3551 58.9004 30.448 58.9004 30.5176 58.9004C35.9249 58.9004 41.077 56.4637 44.6742 52.1703L62.4976 30.8889C64.4006 28.6146 66.9534 27.0829 69.6919 26.5491C70.3185 26.4331 70.8987 26.3635 71.4325 26.3635H71.5021C71.7574 26.3635 71.9895 26.3634 72.2216 26.3867C75.8884 26.5723 79.2534 28.1968 81.7134 30.9353C84.1734 33.6738 85.4035 37.2014 85.2178 40.8914C84.8465 47.8536 79.091 53.5395 72.1287 53.8644C67.4176 54.0733 62.7529 50.6386 60.4089 48.3642C60.3625 48.2946 60.2929 48.2482 60.2465 48.2018L60.2233 48.1786C59.7823 47.784 59.2021 47.5519 58.5523 47.5519C57.1599 47.5519 56.0227 48.6891 56.0227 50.0816C56.0227 50.8474 56.3708 51.5436 56.9046 52.0078C60.6178 56.5565 66.3733 59.2021 72.3608 58.9236C81.8991 58.4827 89.7665 50.685 90.2538 41.1699C90.5555 36.1106 88.8382 31.2602 85.4731 27.5238Z" fill="white"/>
    </CsSvg>
  );
};

export default Icon;