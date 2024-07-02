import ArrowUpSvg from '@/svgs/ArrowUp/ArrowUpSvg';
import MedalSvg from '@/svgs/MedalSvg/MedalSvg';
import WithdrawSvg from '@/svgs/WithdrawSvg/WithdrawSvg';
import React from 'react';
import Card from '../Card/Card';
import BankSvg from '@/svgs/BankSvg/BankSvg';
import CardSvg from '@/svgs/CardSvg/CardSvg';

function OverviewMenuCard() {
  return (
    <Card class="w-[560px] h-[470px] neurial-regular max-lg:w-[390px] max-lg:h-[500px] max-md:w-[90vw]">
      <div>
        <div className="flex p-4 justify-between max-lg:flex-col items-center">
          <button className="w-[228px] h-[44px] border-2 border-blue-primary hover:shadow-sm hover:shadow-blue-primary duration-150 rounded-2xl text-purple-black-primary flex items-center text-center ml-4 neurial-bold max-lg:ml-0 justify-center">
            Enviar
            <ArrowUpSvg width="20" height="20" class="ml-3"></ArrowUpSvg>
          </button>
          <button className="w-[228px] h-[44px] border-2 border-blue-primary hover:shadow-sm hover:shadow-blue-primary duration-150 rounded-2xl text-purple-black-primary flex items-center text-center ml-4 neurial-bold max-lg:ml-0 justify-center max-lg:mt-5">
            Solicitar
            <ArrowUpSvg width="20" height="20" class="ml-3"></ArrowUpSvg>
          </button>
        </div>
        <div className="flex justify-between py-6 px-10">
          <button className="flex flex-col justify-center items-center text-center glass p-1 rounded-lg">
            <BankSvg
              width="65"
              height="65"
              class="bg-black-blue-primary rounded-2xl p-2"
            ></BankSvg>
            <p className="text-purple-black-2 mt-2">Adicionar Dinheiro</p>
          </button>
          <button className="flex flex-col justify-center items-center text-center glass p-1 rounded-lg">
            <WithdrawSvg
              width="65"
              height="65"
              class="bg-black-blue-primary rounded-2xl p-2"
            ></WithdrawSvg>
            <p className="text-purple-black-2 mt-2">Sacar Dinheiro</p>
          </button>
          <button className="flex flex-col justify-center items-center text-center glass p-1 rounded-lg">
            <CardSvg
              width="65"
              height="65"
              class="bg-black-blue-primary rounded-2xl p-2"
            ></CardSvg>
            <p className="text-purple-black-2 mt-2">Adicionar Cartão</p>
          </button>
        </div>
        <div>
          <div className="p-2 mt-5 flex">
            <MedalSvg width="40" height="40"></MedalSvg>
            <h2 className="text-purple-black-2 text-2xl ml-4">Promoções</h2>
          </div>
          <div className="mx-8 my-12 flex justify-center text-center items-center text-xl">
            <p className="text-purple-black-2">Nenhuma Promoção no momento</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default OverviewMenuCard;
