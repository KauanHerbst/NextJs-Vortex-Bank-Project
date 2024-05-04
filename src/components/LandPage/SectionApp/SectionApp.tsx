'use client';

import Aos from 'aos';
import 'aos/dist/aos.css';
import AppSvg from '@/svgs/AppSvg/AppSvg';
import AppleStoreSvg from '@/svgs/AppleStore/AppleStoreSvg';
import EllipseBlurSvg from '@/svgs/EllipseBlur/EllipseBlurSvg';
import GooglePlaySvg from '@/svgs/GooglePlay/GooglePlaySvg';
import Link from 'next/link';
import { useEffect } from 'react';

function SectionApp() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="container">
      <div className="flex-item-2 flex justify-center items-center">
        <div
          className="absolute  max-md:hidden mb-80"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="200"
          data-aos-anchor-placement="bottom-bottom"
        >
          <EllipseBlurSvg width="690" height="690"></EllipseBlurSvg>
        </div>
        <div
          className="absolute  max-md:hidden mt-80"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <EllipseBlurSvg width="690" height="690"></EllipseBlurSvg>
        </div>
        <div className="appImage relative" data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="600"
          data-aos-anchor-placement="bottom-bottom"></div>
      </div>
      <div className="flex-item-1">
        <h2
          className="neue-regular text-4xl"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          Vortex Bank <span className="text-blue-primary">App</span>
        </h2>
        <p
          className="neurial-regular text-white-black-primary text-xl mt-12 ml-5 w-64"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="300"
          data-aos-anchor-placement="top-center"
        >
          Todas as ferramentas necessárias para gerenciar suas finanças de forma
          eficiente, segura e conveniente, garantindo mais tempo para as coisas que
          realmente importam em sua vida
        </p>
        <h3
          className="neue-regular text-3xl mt-12"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="300"
          data-aos-anchor-placement="top-center"
        >
          Baixe <span className="text-blue-primary">Agora</span>
        </h3>
        <div
          className="flex mt-8"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          <div>
            <Link href={'/about'}>
              <GooglePlaySvg width="170" height="45"></GooglePlaySvg>
            </Link>
          </div>
          <div>
            <Link href={'/about'}>
              <AppleStoreSvg width="170" height="45"></AppleStoreSvg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionApp;
