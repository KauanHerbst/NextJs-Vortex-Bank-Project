import AppSvg from '@/svgs/AppSvg/AppSvg';
import AppleStoreSvg from '@/svgs/AppleStore/AppleStoreSvg';
import EllipseBlurSvg from '@/svgs/EllipseBlur/EllipseBlurSvg';
import GooglePlaySvg from '@/svgs/GooglePlay/GooglePlaySvg';
import Link from 'next/link';

function SectionApp() {
  return (
    <section className="container">
      <div className="flex-item-2 flex justify-center items-center">
        <div className="absolute  max-md:hidden mb-80">
          <EllipseBlurSvg width="690" height="690"></EllipseBlurSvg>
        </div>
        <div className="absolute  max-md:hidden mt-80">
          <EllipseBlurSvg width="690" height="690"></EllipseBlurSvg>
        </div>
        <div className="appImage relative"></div>
      </div>
      <div className="flex-item-1">
        <h2 className="neue-regular text-4xl">
          Vortex Bank <span className="text-blue-primary">App</span>
        </h2>
        <p className="neurial-regular text-white-black-primary text-xl mt-12 ml-5 w-64">
          Todas as ferramentas necessárias para gerenciar suas finanças de forma
          eficiente, segura e conveniente, garantindo mais tempo para as coisas que
          realmente importam em sua vida
        </p>
        <h3 className="neue-regular text-3xl mt-12">
          Baixe <span className="text-blue-primary">Agora</span>
        </h3>
        <div className="flex mt-8">
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
