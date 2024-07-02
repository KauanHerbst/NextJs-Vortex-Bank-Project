import React from 'react';
import Card from '../Card/Card';
import Link from 'next/link';

function ActivityCard() {
  return (
    <Card class="w-[340px] h-[170px] mt-5 max-lg:w-[304px] max-md:w-[90vw]">
      <div className="p-4 neurial-regular">
        <h2 className="text-black text-xl">Atividade</h2>
        <div className="px-6">
          <p className="text-purple-black-primary mt-3 mb-3">
            Veja quando os pagamentos chegam e quando saem.
          </p>
          <Link
            href={'/app/wallet'}
            className="bg-blue-primary rounded-lg px-5 py-2 shadow-xl hover:bg-blue-black-2 duration-150"
          >
            Ver Atividade
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default ActivityCard;
