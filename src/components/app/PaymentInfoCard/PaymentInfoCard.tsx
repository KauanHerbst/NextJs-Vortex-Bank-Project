import React from 'react';
import Card from '../Card/Card';

function PaymentInfoCard() {
  return (
    <Card class="w-[470px] h-[330px] p-6 flex flex-col gap-2 neurial-regular max-md:w-[90vw]">
      <h2 className="text-black text-2xl">Solicitar / Pagar</h2>
      <div className="p-2">
        <h2 className="text-black text-xl">Devedor / Recebedor</h2>
        <div className="flex mt-3">
          <h3 className="text-black text-xl">Nome:</h3>
          <p className="text-gray-900 text-xl ml-2">Kauan Herbst</p>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <p className="text-black text-xl">Valor</p>
          <input
            type="text"
            className="rounded-xl border-[2px] border-black text-black px-2 py-[3px] "
            placeholder="R$: 0,00"
          ></input>
        </div>
        <div className="flex justify-center items-center mt-4">
          <button className="bg-blue-primary rounded-lg px-5 py-2 shadow-xl hover:bg-blue-black-2 duration-150 w-[232px]">
            Pagar
          </button>
        </div>
      </div>
    </Card>
  );
}

export default PaymentInfoCard;
