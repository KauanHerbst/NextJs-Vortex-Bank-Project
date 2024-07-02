import InformationSvg from '@/svgs/InformationSvg/InformationSvg';
import React from 'react';
import Card from '../Card/Card';
import Link from 'next/link';

function SupportCard() {
  return (
    <Card class="w-[340px] h-[170px] mt-5 max-lg:w-[304px] max-md:w-[90vw]">
      <div className="p-4 neurial-regular">
        <div className="flex ">
          <InformationSvg width="32" height="32"></InformationSvg>
          <h2 className="text-purple-black-primary text-xl ml-5">Fale conosco</h2>
        </div>
        <div className="px-4">
          <p className="text-purple-black-primary mt-3 mb-3">
            Fale com o Serviço de Atendimento ao Cliente
          </p>
          <Link
            href={'/about'}
            className="bg-blue-primary px-10 py-2 rounded-lg shadow-lg hover:bg-blue-black-2 duration-150"
          >
            Suporte
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default SupportCard;
