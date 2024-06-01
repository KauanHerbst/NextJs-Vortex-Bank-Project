import CustomInput from '@/components/app/CustomInput/CustomInput';
import VortexBankHorizontalSvg from '@/svgs/VortexBankHorizontal/VortexBankHorizontalSvg';
import Link from 'next/link';

export default function Account() {
  return (
    <>
      <main className="flex flex-col">
        <div className="flex justify-center items-center ">
          <Link href={'/'}>
            <VortexBankHorizontalSvg width="300" height="300"></VortexBankHorizontalSvg>
          </Link>
        </div>
        <div className="dark:border-white border-black border-2 rounded-xl max-sm:w-[372px] w-[472px] h-[490px] bg-white dark:bg-purple-black-2">
          <div className="flex flex-col justify-center items-center p-5">
            <h2 className="text-3xl neurial-bold text-black dark:text-white">
              Criar Conta
            </h2>
            <h3 className="text-xl text-justify mt-6 w-64 neurial-regular text-black dark:text-white">
              Digite seu CPF para abrir sua conta na Vortex
            </h3>
            <CustomInput class='mt-10 w-72' for='cpf' classLabel='right-[245px]' text='CPF' type='text'></CustomInput>
            <button className="text-center btn-primary bg-blue-primary p-2 px-20 rounded-2xl shadow-sm mt-7 mb-7 hover:px-24 duration-100">
              Confirmar
            </button>
          </div>
          <div className="flex justify-center items-center border-t-2 flex-col border-black dark:border-white dark:text-white text-black ">
            <h3 className="text-blue-primary mt-3">Já possui uma conta?</h3>
            <Link
              href={'/login'}
              className="text-center btn-primary border-2 p-2 px-20 rounded-2xl border-blue-primary shadow-sm mt-4 hover:p-3 hover:px-24 duration-100"
            >
              Entrar
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
