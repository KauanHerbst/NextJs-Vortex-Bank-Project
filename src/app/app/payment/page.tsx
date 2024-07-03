'use client';
import RecivePaymentCard from '@/components/app/RecivePaymentCard/RecivePaymentCard';
import SendPaymentCard from '@/components/app/SendPaymentCard/SendPaymentCard';
import { optionPayment } from '@/interfaces/OptionPayment';
import { useEffect, useState } from 'react';

export default function Payment() {
  const [option, setOption] = useState<optionPayment>(optionPayment.SEND);

  function changeOption(optionButton: optionPayment): void {
    setOption(optionButton);
  }

  function changeButtonSelected(): void {
    const btnSend = document.getElementById('btn-send') as HTMLElement;
    const btnRecive = document.getElementById('btn-recive') as HTMLElement;
    if (option === optionPayment.SEND) {
      btnRecive.classList.remove('btn-white-select');
      btnSend.classList.add('btn-white-select');
    } else {
      btnSend.classList.remove('btn-white-select');
      btnRecive.classList.add('btn-white-select');
    }
  }

  useEffect(() => {
    changeButtonSelected();
  }, [option]);

  return (
    <div className="w-[100%] h-[100%] bg-white dark:bg-purple-black-2 ">
      <div className="w-[100%] bg-white h-[72px] flex justify-center items-center gap-16 shadow-sm shadow-black neurial-medium">
        <button
          className="text-black w-[105px] h-[32px] hover:shadow-md hover:shadow-black rounded-[8px] duration-150"
          onClick={() => {
            changeOption(optionPayment.SEND);
          }}
          id="btn-send"
        >
          Enviar
        </button>
        <button
          className="text-black  w-[105px] h-[32px] hover:shadow-md hover:shadow-black rounded-[8px] duration-150"
          onClick={() => {
            changeOption(optionPayment.RECEIVE);
          }}
          id="btn-recive"
        >
          Pedir
        </button>
      </div>
      <div className="h-[80%] max-md:h-[50%] flex justify-center items-center neurial-regular">
        {option === optionPayment.SEND ? (
          <SendPaymentCard></SendPaymentCard>
        ) : option === optionPayment.RECEIVE ? (
          <RecivePaymentCard></RecivePaymentCard>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
