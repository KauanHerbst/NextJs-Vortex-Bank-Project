import React from 'react';
import Card from '../Card/Card';

function ProfileCard() {
  return (
    <Card class="w-[770px] h-[284px] max-lg:w-[85%] max-sm:h-[360px]">
      <div className="neurial-regular p-4 ">
        <div className="flex justify-items-center items-center">
          <h1 className="text-black text-2xl text-center m-auto">Conta Vortex</h1>
        </div>
        <div className="flex px-10 py-2 justify-between mt-8 max-md:flex-col ">
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 ">
              <h2 className="text-black text-xl neurial-medium max-md:text-lg">Nome:</h2>
              <p className="text-black text-lg max-md:text-base ">Vortex Bank</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <h2 className="text-black text-xl neurial-medium max-md:text-lg">Email:</h2>
              <p className="text-black text-lg max-md:text-base max-w-[280px] max-sm:max-w-[220px] break-words">
                vortexbank@vortexbank.com
              </p>
            </div>
            <div className="flex gap-3">
              <h2 className="text-black text-xl neurial-medium max-md:text-lg">CPF:</h2>
              <p className="text-black text-lg max-md:text-base">1010101010</p>
            </div>
          </div>
          <div className="max-md:flex max-md:justify-center">
            <button className="bg-blue-primary rounded-lg px-12 py-1.5 shadow-xl hover:bg-blue-black-2 duration-150 text-white neurial-bold mt-8">
              Trocar Senha
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProfileCard;
