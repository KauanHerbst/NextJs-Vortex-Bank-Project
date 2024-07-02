'use client';
import ThreePointsSvg from '@/svgs/ThreePointsSvg/ThreePointsSvg';
import React, { useState } from 'react';
import Card from '../Card/Card';
import ClosedEyeSvg from '@/svgs/ClosedEyeSvg/ClosedEyeSvg';
import EyeSvg from '@/svgs/EyeSvg/EyeSvg';

function BalanceCard() {
  const [balanceIsVisible, setBalanceIsVisible] = useState<Boolean>(false);

  function changeBalanceVisibility(): void {
    setBalanceIsVisible(!balanceIsVisible);
  }

  return (
    <Card class="w-[340px] h-[170px] neurial-regular text-lg max-lg:w-[304px] max-md:w-[90vw]">
      <div className="p-4 ">
        <div className="flex justify-between">
          <h2 className="text-purple-black-primary">Saldo</h2>
          <ThreePointsSvg width="25" height="25"></ThreePointsSvg>
        </div>
        <div className="flex flex-col justify-center px-10 mt-4">
          <div className="flex justify-between text-xl items-center">
            {balanceIsVisible ? (
              <h2 className="text-black neurial-medium">R$ 9999999</h2>
            ) : (
              <h2 className="text-black neurial-medium">-------------</h2>
            )}
            <button onClick={changeBalanceVisibility}>
              {balanceIsVisible ? (
                <ClosedEyeSvg width="35" height="35"></ClosedEyeSvg>
              ) : (
                <EyeSvg width="35" height="35"></EyeSvg>
              )}
            </button>
          </div>
          <div>
            <h3 className="text-purple-black-primary mt-2 text-base">Disponivel</h3>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default BalanceCard;
