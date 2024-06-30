import LogoVB from '@/svgs/LogoVB/LogoVB';
import Link from 'next/link';
import React from 'react';
import OptionBox from '../OptionBox/OptionBox';
import HouseSvg from '@/svgs/HouseSvg/HouseSvg';
import SendSvg from '@/svgs/SendSvg/SendSvg';
import WalletSvg from '@/svgs/WalletSvg/WalletSvg';
import CardSvg from '@/svgs/CardSvg/CardSvg';
import ProfileSvg from '@/svgs/ProfileSvg/ProfileSvg';
import BellSvg from '@/svgs/BellSvg/BellSvg';
import GearSvg from '@/svgs/GearSvg/GearSvg';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

function NavBarDesktop() {
  return (
    <>
      <Link href={'/'} className="ml-4">
        <LogoVB width="60" height="60"></LogoVB>
      </Link>
      <div className="flex max-lg:hidden">
        <OptionBox
          class="p-[8px] max-lg:hidden"
          text="Visão Geral"
          id="home-box"
          url="/app/home"
          svg={<HouseSvg width="25" height="25"></HouseSvg>}
        ></OptionBox>
        <OptionBox
          class="p-[8px]"
          text="Enviar e Pedir"
          id="payment-box"
          url="/app/payment"
          svg={<SendSvg width="25" height="25"></SendSvg>}
        ></OptionBox>
        <OptionBox
          class="p-[8px]"
          text="Carteira"
          id="wallet-box"
          url="/app/wallet"
          svg={<WalletSvg width="25" height="25"></WalletSvg>}
        ></OptionBox>
        <OptionBox
          class="p-[8px]"
          text="Cartões"
          id="cards-box"
          url="/app/cards"
          svg={<CardSvg width="25" height="25"></CardSvg>}
        ></OptionBox>
        <OptionBox
          class="p-[8px]"
          text="Perfil"
          id="profile-box"
          url="/app/profile"
          svg={<ProfileSvg width="25" height="25"></ProfileSvg>}
        ></OptionBox>
      </div>
      <div className="flex justify-center items-center max-lg:hidden">
        <div className="mr-7">
          <ToggleTheme></ToggleTheme>
        </div>
        <OptionBox
          class="p-[4px] mr-2 ml-2"
          id="notifications-box"
          url="/app/notifications"
          svg={<BellSvg width="30" height="30"></BellSvg>}
        ></OptionBox>
        <OptionBox
          class="p-[4px] mr-2 ml-2"
          id="configurations-box"
          url="/app/configurations"
          svg={<GearSvg width="30" height="30"></GearSvg>}
        ></OptionBox>
        <div className="mr-4 ml-2 bg-auxiliary-red p-1 w-[55px] rounded-lg shadow-sm shadow-auxiliary-red">
          <h2 className="text-center">Sair</h2>
        </div>
      </div>
    </>
  );
}

export default NavBarDesktop;
