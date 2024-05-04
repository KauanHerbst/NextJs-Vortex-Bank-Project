'use client';

import Aos from 'aos';
import 'aos/dist/aos.css';
import ArrowUpSvg from '@/svgs/ArrowUp/ArrowUpSvg';
import CardsGroupSvg from '@/svgs/CardsGroup/CardsGroupSvg';
import VortexBankSvg from '@/svgs/VortexBank/VortexBankSvg';
import Link from 'next/link';
import { useEffect } from 'react';

function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section>
      <div className="background-hero">
        <div className="container">
          <div className="flex-item-2 max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:items-center">
            <div className="max-md:hidden" data-aos="fade-right" data-aos-duration="2000" >
              <VortexBankSvg width="477" height="314"></VortexBankSvg>
            </div>
            <div
              className="mt-5 md:hidden"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <VortexBankSvg width="300" height="214"></VortexBankSvg>
            </div>
            <h2
              className="text-4xl neue-regular mt-12 max-md:text-3xl"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="200"
            >
              Seu banco do futuro na sua mão
            </h2>
            <div
              className="mt-12 w-[480px] max-md:w-[320px]"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="300"
              data-aos-anchor-placement="top-bottom"
            >
              <Link href={'/account'}>
                <div className="flex items-center justify-center text-center btn-primary border-2 p-3 px-5 rounded-2xl border-blue-primary shadow-sm shadow-blue-primary hover:bg-blue-primary text-xl">
                  <span className="mr-7">Abrir Minha Conta Agora</span>
                  <ArrowUpSvg width="30" height="30"></ArrowUpSvg>
                </div>
              </Link>
            </div>
          </div>
          <div
            className="flex-item-1 max-xl:hidden"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="400"
          >
            <div className="ml-16 mt-48">
              <CardsGroupSvg width="530" height="500"></CardsGroupSvg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
