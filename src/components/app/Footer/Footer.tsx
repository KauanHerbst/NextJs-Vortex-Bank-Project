import VortexBank from '@/svgs/VortexBank/VortexBankSvg';
import VortexBankHorizontalSvg from '@/svgs/VortexBankHorizontal/VortexBankHorizontalSvg';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="w-[100vw] h-[65px] bg-black-blue-primary flex justify-center items-center overflow-y-hidden max-md:h-[375px]">
      <div className="w-[1140px] flex  max-md:justify-center items-center neue-regular text-xl max-md:text-sm max-md:flex-col">
        <div className="max-md:ml-10 ml-3 mr-10 max-md:hidden">
          <VortexBankHorizontalSvg width="170" height="170"></VortexBankHorizontalSvg>
        </div>
        <div className='max-md:block hidden mr-10'>
            <VortexBank width='160' height='160'></VortexBank>
        </div>
        <Link href={'/'} className="mr-10 max-md:mt-5">
          Home
        </Link>
        <Link href={'/about'} className="mr-10 max-md:mt-5">
          Fale Conosco
        </Link>
        <Link
          href={'https://github.com/KauanHerbst/NextJs-Vortex-Bank-Project'}
          target="_blank"
          className="mr-10 max-md:mt-5"
        >
          © 2024 Vortex Bank. <p>Todos os Diretos Reservados</p>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
