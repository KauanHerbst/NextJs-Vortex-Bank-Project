import ArrowUpSvg from '@/svgs/ArrowUp/ArrowUpSvg';
import CallSvg from '@/svgs/Call/CallSvg';
import PadlockSvg from '@/svgs/Padlock/PadlockSvg';
import PhoneSvg from '@/svgs/Phone/PhoneSvg';
import VectorSSvg from '@/svgs/VectorS/VectorSSvg';
import Link from 'next/link';

function SectionBenefits() {
  return (
    <section className="container flex">
      <div className="flex-item-1 flex flex-col justify-center items-center">
        <h2 className="text-5xl neue-regular text-center">Benefícios</h2>
        <p className="neurial-regular text-xl text-white-black-primary mt-8 w-80 m-auto text-justify max-md:hidden">
          Conta gratuita, cartão de crédito sem anuidade, empréstimo e muito mais
        </p>
        <Link href={'/account'}>
          <div className="flex items-center justify-center text-center btn-primary border-2 p-2 rounded-2xl border-blue-primary shadow-sm shadow-blue-primary hover:bg-blue-primary text-xl mt-8 w-[248px] max-lg:mb-16 max-md:hidden">
            <h3 className="mr-8">Abrir Conta</h3>
            <ArrowUpSvg width="30" height="30"></ArrowUpSvg>
          </div>
        </Link>
      </div>
      <div className="flex-item-3 ml-12 max-md:ml-2 cursor-default">
        <div className="flex justify-center items-center max-xl:flex-col">
          <div className="w-80 h-56 border-l-8 px- border-blue-primary rounded-sm shadow-2xl flex flex-col items-center hover:border-r-2 hover:border-t-2 hover:border-b-2 duration-75 hover:rounded-lg ">
            <div className="bg-white w-16 h-16 rounded-full flex justify-center items-center shadow-md shadow-blue-primary mt-2">
              <VectorSSvg width="40" height="40"></VectorSSvg>
            </div>
            <h2 className="neue-regular text-2xl mt-4">Conta Digital</h2>
            <p className="px-5 mt-4 neurial-regular text-xl text-white-black-primary">
              Uma conta digital que te dá controle sobre o seu dinheiro.
            </p>
          </div>
          <div className="w-80 h-56 ml-8 border-l-8 px- border-blue-primary rounded-sm shadow-2xl flex flex-col items-center max-xl:mt-12 max-xl:ml-0 hover:border-r-2 hover:border-t-2 hover:border-b-2 duration-75 hover:rounded-lg">
            <div className="bg-white w-16 h-16 rounded-full flex justify-center items-center shadow-md shadow-blue-primary mt-2">
              <PadlockSvg width="40" height="40"></PadlockSvg>
            </div>
            <h2 className="neue-regular text-2xl mt-4">Seguros</h2>
            <p className="px-5 mt-4 neurial-regular text-xl text-white-black-primary">
              Ofereça opções de seguros para proteger seus bens, vida e saúde
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 max-xl:flex-col">
          <div className="w-80 h-56 border-l-8 px- border-blue-primary rounded-sm shadow-2xl flex flex-col items-center hover:border-r-2 hover:border-t-2 hover:border-b-2 duration-75 hover:rounded-lg">
            <div className="bg-white w-16 h-16 rounded-full flex justify-center items-center shadow-md shadow-blue-primary mt-2">
              <PhoneSvg width="40" height="40"></PhoneSvg>
            </div>
            <h2 className="neue-regular text-2xl mt-4">Experiência Bancária</h2>
            <p className="px-5 mt-4 neurial-regular text-xl text-white-black-primary">
              Invista em uma experiência bancária eficiente e inovadora.
            </p>
          </div>
          <div className="w-80 h-56 ml-8 border-l-8 px- border-blue-primary rounded-sm shadow-2xl flex flex-col items-center max-xl:mt-12 max-xl:ml-0 hover:border-r-2 hover:border-t-2 hover:border-b-2 duration-75 hover:rounded-lg">
            <div className="bg-white w-16 h-16 rounded-full flex justify-center items-center shadow-md shadow-blue-primary mt-2">
              <CallSvg width="40" height="40"></CallSvg>
            </div>
            <h2 className="neue-regular text-2xl mt-4">Atendimento ao Cliente</h2>
            <p className="px-5 mt-4 neurial-regular text-xl text-white-black-primary">
              Suporte dedicado para esclarecer dúvidas e resolver problemas
            </p>
          </div>
        </div>
      </div>
      <div className="md:hidden mt-12">
        <p className="neurial-regular text-xl text-white-black-primary mt-8 w-80 m-auto text-justify">
          Conta gratuita, cartão de crédito sem anuidade, empréstimo e muito mais
        </p>
        <Link href={'/account'}>
          <div className="flex items-center justify-center text-center btn-primary border-2 p-2 rounded-2xl border-blue-primary shadow-sm shadow-blue-primary hover:bg-blue-primary text-xl mt-8 w-[248px] max-lg:mb-16">
            <h3 className="mr-8">Abrir Conta</h3>
            <ArrowUpSvg width="30" height="30"></ArrowUpSvg>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default SectionBenefits;
