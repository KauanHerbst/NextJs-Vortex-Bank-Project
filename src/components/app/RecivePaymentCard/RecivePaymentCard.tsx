import React from 'react';
import Card from '../Card/Card';

function RecivePaymentCard() {
  return (
    <Card class="w-[470px] h-[260px] p-6 flex flex-col gap-10 max-md:w-[90vw]">
      <h2 className="text-black text-2xl">Solicitar Pagamento</h2>
      <input
        type="text"
        className="rounded-xl border-[2px] border-black text-black px-2 py-[3px] "
        placeholder="Nome, Celular, E-mail"
      ></input>
      <div className="flex ">
        <button className="bg-blue-primary rounded-lg px-5 py-2 shadow-xl hover:bg-blue-black-2 duration-150 w-[232px]">
          Avançar
        </button>
      </div>
    </Card>
  );
}

export default RecivePaymentCard;
