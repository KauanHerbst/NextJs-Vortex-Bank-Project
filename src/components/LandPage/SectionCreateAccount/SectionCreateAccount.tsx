import EllipseBlurSvg from '@/svgs/EllipseBlur/EllipseBlurSvg';
import SideCardSvg from '@/svgs/SideCard/SideCardSvg';
import Link from 'next/link';

function SectionCreateAccount() {
  return (
    <section className="container ">
      <div className="flex-item-1 max-lg:hidden">
        <div className="absolute ">
          <EllipseBlurSvg width="470" height="500"></EllipseBlurSvg>
        </div>
        <div className="relative z-10">
          <SideCardSvg width="400" height="400"></SideCardSvg>
        </div>
      </div>
      <div className="flex-item-3 ml-12 bg-blue-primary w-[324px] h-[380px] rounded-lg p-3 flex flex-col items-center max-lg:h-[432px] max-lg:m-auto max-lg:w-[100%] ">
        <h2 className="text-3xl text-center neue-regular mt-2">Abra Sua Conta Agora</h2>
        <p className="neurial-regular text-xl text-white w-48 text-center mt-8">
          Uma conta digital que te dá controle sobre o seu dinheiro.
        </p>
        <div className="mt-10 custom-input relative">
          <input type="text" required></input>
          <label htmlFor="cpf" className="right-[245px]">
            CPF
          </label>
        </div>
        <Link
          href={'/account'}
          className="text-center btn-primary border-2 p-2 px-4 rounded-2xl border-white shadow-sm mt-7 hover:p-3 hover:px-5 duration-100"
        >
          Criar Conta
        </Link>
      </div>
    </section>
  );
}

export default SectionCreateAccount;
