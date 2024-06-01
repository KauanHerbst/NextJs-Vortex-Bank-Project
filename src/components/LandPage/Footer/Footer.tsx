'use client';

import Aos from 'aos';
import 'aos/dist/aos.css';
import GithubSvg from '@/svgs/Github/GithubSvg';
import LinkedinSvg from '@/svgs/Linkedin/LinkedinSvg';
import LogoVB from '@/svgs/LogoVB/LogoVB';
import VortexBank from '@/svgs/VortexBank/VortexBankSvg';
import Link from 'next/link';
import { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <footer className="container flex flex-col">
      <div className="flex flex-col justify-center ">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <VortexBank width="300" height="300"></VortexBank>
        </div>
        <Link
          href={'/about'}
          className="flex items-center justify-center text-center btn-primary border-2 p-2 rounded-2xl border-blue-primary shadow-sm shadow-blue-primary hover:bg-blue-primary"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          Saiba Mais
        </Link>
      </div>
      <div className="mt-24 flex max-lg:flex-col max-lg:justify-center max-lg:items-center">
        <div
          className="flex flex-col justify-center items-center "
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          <LogoVB width="90" height="90"></LogoVB>
          <h2 className="text-3xl neue-regular mt-12">Vortex Bank</h2>
        </div>
        <div className="flex justify-center items-center ml-24 max-lg:ml-0 max-lg:mt-10">
          <Link
            href={'/'}
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
            data-aos-anchor-placement="top-center"
          >
            <h2 className="text-2xl neue-regular m-5 hover:text-blue-primary duration-150">
              Home
            </h2>
          </Link>
          <Link
            href={'/about'}
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="400"
            data-aos-anchor-placement="top-center"
          >
            <h2 className="text-2xl neue-regular m-5 hover:text-blue-primary duration-150">
              Sobre
            </h2>
          </Link>
        </div>
        <div className="ml-24 max-lg:ml-0 max-lg:mt-10">
          <div className="flex p-2 border-l-8  border-blue-black-2"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
            data-aos-anchor-placement="top-center">
            <Link
              href={'https://github.com/KauanHerbst'}
              target="_blank"
              className="bg-blue-primary w-20 h-20 rounded-full flex justify-center items-center m-3 "
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="500"
              data-aos-anchor-placement="top-center"
            >
              <GithubSvg width="50" height="50"></GithubSvg>
            </Link>
            <Link
              href={'https://www.linkedin.com/in/kauanherbst/'}
              target="_blank"
              className="bg-blue-primary w-20 h-20 rounded-full flex justify-center items-center m-3"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="500"
              data-aos-anchor-placement="top-center"
            >
              <LinkedinSvg width="50" height="50"></LinkedinSvg>
            </Link>
          </div>
          <h2
            className="text-2xl neue-regular text-center mt-5"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="500"
            data-aos-anchor-placement="top-center"
          >
            Kauan Herbst
          </h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
