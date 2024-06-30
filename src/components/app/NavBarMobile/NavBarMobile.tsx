'use client';
import CloseXSvg from '@/svgs/CloseXSvg/CloseXSvg';
import VortexBankHorizontalSvg from '@/svgs/VortexBankHorizontal/VortexBankHorizontalSvg';
import Link from 'next/link';
import React, { useState } from 'react';
import OptionBox from '../OptionBox/OptionBox';
import HouseSvg from '@/svgs/HouseSvg/HouseSvg';
import SendSvg from '@/svgs/SendSvg/SendSvg';
import WalletSvg from '@/svgs/WalletSvg/WalletSvg';
import CardSvg from '@/svgs/CardSvg/CardSvg';
import ProfileSvg from '@/svgs/ProfileSvg/ProfileSvg';
import BellSvg from '@/svgs/BellSvg/BellSvg';
import GearSvg from '@/svgs/GearSvg/GearSvg';
import { MenuMobileProps } from '@/interfaces/MenuMobileProps';
import VortexBank from '@/svgs/VortexBank/VortexBankSvg';

function NavBarMobile(Props: MenuMobileProps) {
  return (
    <>
      <div
        className="mt-[90vh] bg-white w-[50vw] max-sm:w-[70vw] max-sm:left-[30%] h-[100vh] justify-items-center shadow-2xl z-50 fixed left-[50%] hidden"
        id="menu-mobile"
      >
        <div className="flex items-center flex-col w-[100%]">
          <div className="bg-black-blue-primary w-[100%] h-[94px] flex justify-between items-center">
            <Link href={'/'} className="ml-4 ">
              <div className='sm:block max-sm:hidden'>
                <VortexBankHorizontalSvg
                  width="190"
                  height="90"
                ></VortexBankHorizontalSvg>
              </div>
              <div className='sm:hidden'>
                <VortexBank width='90' height='90'></VortexBank>
              </div>
            </Link>
            <button
              className="bg-blue-black-2 flex justify-center items-center p-[12px] rounded-[16px] mr-4"
              id="close-box"
              onClick={Props.closeFunction}
            >
              <CloseXSvg width="25" height="25"></CloseXSvg>
            </button>
          </div>
          <div className="bg-blue-black-2 mt-10 rounded-[16px] max-sm:mt-6">
            <OptionBox
              class="w-[250px] h-[48px] max-sm:w-[200px] "
              text="Visão Geral"
              id="home-box"
              url="/app/home"
              svg={<HouseSvg width="25" height="25"></HouseSvg>}
            ></OptionBox>
          </div>
          <div className="bg-blue-black-2 mt-10 rounded-[16px] max-sm:mt-6">
            <OptionBox
              class="w-[250px] h-[48px] max-sm:w-[200px]"
              text="Enviar e Pedir"
              id="payment-box"
              url="/app/payment"
              svg={<SendSvg width="25" height="25"></SendSvg>}
            ></OptionBox>
          </div>
          <div className="bg-blue-black-2 mt-10 rounded-[16px] max-sm:mt-6">
            <OptionBox
              class="w-[250px] h-[48px] max-sm:w-[200px]"
              text="Carteira"
              id="wallet-box"
              url="/app/wallet"
              svg={<WalletSvg width="25" height="25"></WalletSvg>}
            ></OptionBox>
          </div>
          <div className="bg-blue-black-2 mt-10 rounded-[16px] max-sm:mt-6">
            <OptionBox
              class="w-[250px] h-[48px] max-sm:w-[200px]"
              text="Cartões"
              id="cards-box"
              url="/app/cards"
              svg={<CardSvg width="25" height="25"></CardSvg>}
            ></OptionBox>
          </div>
          <div className="bg-blue-black-2 mt-10 rounded-[16px] max-sm:mt-6">
            <OptionBox
              class="w-[250px] h-[48px] max-sm:w-[200px]"
              text="Perfil"
              id="profile-box"
              url="/app/profile"
              svg={<ProfileSvg width="25" height="25"></ProfileSvg>}
            ></OptionBox>
          </div>
          <div className="bg-blue-black-2 mt-10 rounded-[16px] max-sm:mt-6">
            <OptionBox
              class="w-[250px] h-[48px] max-sm:w-[200px]"
              id="notifications-box"
              text="Notificações"
              url="/app/notifications"
              svg={<BellSvg width="30" height="30"></BellSvg>}
            ></OptionBox>
          </div>
          <div className="bg-blue-black-2 mt-10 rounded-[16px] max-sm:mt-6">
            <OptionBox
              class="w-[250px] h-[48px] max-sm:w-[200px]"
              id="configurations-box"
              text="Configurações"
              url="/app/configurations"
              svg={<GearSvg width="30" height="30"></GearSvg>}
            ></OptionBox>
          </div>
          <Link
            href={'/'}
            className="text-white bg-auxiliary-red mt-10 rounded-[16px] w-[250px] h-[48px] text-center flex justify-center items-center text-2xl max-sm:w-[200px] max-sm:mt-6"
          >
            Sair
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBarMobile;
