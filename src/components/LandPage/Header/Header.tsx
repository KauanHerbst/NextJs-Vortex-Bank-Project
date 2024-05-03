'use client';

import LogoVB from '@/svgs/LogoVB/LogoVB';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Header() {
  const [scrollY, setScrollY] = useState(0);

  function scrollPosition() {
    let headerElement = document.querySelector('header') as HTMLElement;
    if (scrollY > 0) {
      headerElement.style.backgroundColor = '#030637';
    } else {
      headerElement.style.backgroundColor = '';
    }
  }

  useEffect(() => {
    function getScrollYPosition() {
      let scroll = window.scrollY;
      setScrollY(scroll);
    }

    window.addEventListener('scroll', getScrollYPosition);

    scrollPosition();

    return () => {
      window.removeEventListener('scroll', getScrollYPosition);
    };
  }, [scrollY]);

  return (
    <header className="w-[100%] z-50 fixed flex justify-center ease-in-out">
      <div className="w-[1140px] flex justify-between items-center max-xl:w-[100%]">
        <div className=" ml-2">
          <Link href={'/'}>
            <LogoVB width="60" height="60"></LogoVB>
          </Link>
        </div>
        <div className="flex justify-center items-center text-lg">
          <Link
            href={`/about`}
            className="m-5 md:m-1 neue-regular hover:text-blue-primary max-sm:hidden"
          >
            Contato
          </Link>
          <Link
            href={`/about`}
            className="m-5 md:m-1 neue-regular hover:text-blue-primary"
          >
            Sobre
          </Link>
          <Link
            href={`/account`}
            className="btn-primary bg-blue-primary p-2 px-5 rounded-2xl shadow-sm shadow-blue-primary m-5 max-md:m-1 lg:hover:p-3 lg:hover:px-6 max-md:px-3 max-sm:hidden max-md:hidden"
          >
            Abrir Minha Conta
          </Link>
          <Link
            href={`/account`}
            className="btn-primary bg-blue-primary p-2 px-5 rounded-xl shadow-sm shadow-blue-primary m-5 max-md:m-1 lg:hover:p-3 lg:hover:px-6 max-md:px-3 md:hidden"
          >
            Criar
          </Link>
          <Link
            href={`/login`}
            className="btn-primary border-2 p-1 px-5 rounded-xl border-blue-primary shadow-sm shadow-blue-primary m-5 md:m-1 hover:bg-blue-primary lg:hover:p-2 lg:hover:px-6"
          >
            Entrar
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
