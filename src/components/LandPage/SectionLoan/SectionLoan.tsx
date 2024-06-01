'use client';

import Aos from 'aos';
import 'aos/dist/aos.css';
import ApprovedSvg from '@/svgs/Approved/ApprovedSvg';
import CalendarSvg from '@/svgs/Calendar/CalendarSvg';
import HeadsetSvg from '@/svgs/Headset/HeadsetSvg';
import SuitCaseSvg from '@/svgs/SuitCase/SuitCaseSvg';
import Link from 'next/link';
import { useEffect } from 'react';

function SectionLoan() {
  useEffect(() => {
    Aos.init({ disable: 'mobile' });
  }, []);
  return (
    <section className="container max-lg:h-[1156px] h-[848px] max-sm:h-[1656px]">
      <div className="flex-item-1 flex flex-col justify-center h-[272px]">
        <h2
          className="text-5xl neue-regular"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          Empréstimos
        </h2>
        <p
          className="neurial-regular text-xl text-white-black-primary w-64 m-5"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="300"
          data-aos-anchor-placement="top-center"
        >
          Condições especiais para empréstimos pessoais ou financiamentos para projetos
          específicos.
        </p>
        <Link
          href={'/about'}
          className="bg-blue-primary text-center btn-primary border-2 p-2 px-5 rounded-2xl border-blue-primary shadow-sm shadow-blue-primary hover:bg-blue-primary w-[280px] m-3 hover:p-3 hover:px-6  "
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          Saiba Mais
        </Link>
      </div>
      <div className="flex-item-2 flex flex-col mt-16">
        <div className="relative max-xl:flex max-md:flex-col max-md:items-center">
          <div
            className="bg-purple-black-primary border-[1px] border-blue-black-2 shadow-md shadow-blue-primary rounded-md w-64 h-72 p-4 flex flex-col items-center absolute top-[-280px] max-xl:static max-xl:top-0 max-lg:static max-lg:top-0 max-sm:static max-sm:top-0"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
            data-aos-anchor-placement="top-center"
          >
            <div className="bg-blue-primary w-16 h-16 rounded-full flex justify-center items-center mt-2">
              <SuitCaseSvg width="45" height="45"></SuitCaseSvg>
            </div>
            <h3 className="neue-regular text-2xl mt-6 text-center">Acesso a Capital</h3>
            <p className="neurial-regular text-xl text-white-black-primary mt-6 text-center">
              Financiamento necessário para realizar seus projetos
            </p>
          </div>
          <div
            className="bg-purple-black-primary border-[1px] border-blue-black-2 shadow-md shadow-blue-primary rounded-md w-64 h-72 p-4 flex flex-col items-center absolute right-[50px] top-[-170px] max-xl:static max-xl:top-0 max-xl:right-0 max-xl:ml-8 max-md:ml-0 max-md:mt-5 max-lg:static max-lg:top-0 max-sm:static max-sm:top-0"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="400"
            data-aos-anchor-placement="top-center"
          >
            <div className="bg-blue-primary w-16 h-16 rounded-full flex justify-center items-center mt-2 ">
              <CalendarSvg width="45" height="45"></CalendarSvg>
            </div>
            <h3 className="neue-regular text-2xl mt-3 text-center">
              Flexibilidade de Pagamento
            </h3>
            <p className="neurial-regular text-xl text-white-black-primary mt-6 text-center">
              Ajuste as parcelas de acordo com sua capacidade financeira
            </p>
          </div>
        </div>
        <div className="relative max-xl:flex max-xl:mt-8 max-md:flex-col max-md:items-center">
          <div
            className="bg-purple-black-primary border-[1px] border-blue-black-2 shadow-md shadow-blue-primary rounded-md w-64 h-72 p-4 flex flex-col items-center absolute top-[70px] max-xl:static max-xl:top-0 max-lg:static max-lg:top-0 max-sm:static max-sm:top-0"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
            data-aos-anchor-placement="top-center"
          >
            <div className="bg-blue-primary w-16 h-16 rounded-full flex justify-center items-center mt-2">
              <ApprovedSvg width="45" height="45"></ApprovedSvg>
            </div>
            <h3 className="neue-regular text-2xl mt-6 text-center">Rápida Aprovação</h3>
            <p className="neurial-regular text-xl text-white-black-primary mt-6 text-center">
              Rápida aprovação da sua solicitação de empréstimo
            </p>
          </div>
          <div
            className="bg-purple-black-primary border-[1px] border-blue-black-2 shadow-md shadow-blue-primary rounded-md w-64 h-72 p-4 flex flex-col items-center absolute top-[190px] right-[50px] max-xl:static max-xl:top-0 max-xl:right-0 max-xl:ml-8 max-md:ml-0 max-md:mt-5 max-lg:static max-lg:top-0 max-sm:static max-sm:top-0"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="400"
            data-aos-anchor-placement="top-bbottom"
          >
            <div className="bg-blue-primary w-16 h-16 rounded-full flex justify-center items-center mt-2">
              <HeadsetSvg width="40" height="40"></HeadsetSvg>
            </div>
            <h3 className="neue-regular text-2xl mt-2 text-center">
              Atendimento Personalizado
            </h3>
            <p className="neurial-regular text-xl text-center text-white-black-primary mt-4">
              Suporte de especialistas em empréstimos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionLoan;
