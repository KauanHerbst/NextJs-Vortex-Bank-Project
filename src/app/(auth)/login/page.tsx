import VortexBankHorizontalSvg from '@/svgs/VortexBankHorizontal/VortexBankHorizontalSvg';
import Link from 'next/link';

export default function Login() {
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
              Realizar Login
            </h2>
            <div className="mt-10 custom-input  relative">
              <input
                type="text"
                className="border-purple-black-2 dark:border-b-white text-black dark:text-white"
                required
              ></input>
              <label htmlFor="cpf" className="right-[245px] text-black dark:text-white">
                CPF
              </label>
            </div>
            <div className="mt-10 custom-input relative">
              <input
                type="password"
                className="border-purple-black-2 dark:border-b-white text-black dark:text-white"
                required
              ></input>
              <label htmlFor="senha" className="right-[220px] text-black dark:text-white">
                Senha
              </label>
            </div>
            <Link href={'/'} className="text-blue-primary mt-3">
              Esqueceu a senha?
            </Link>
            <button className="text-center btn-primary bg-blue-primary p-2 px-20 rounded-2xl shadow-sm mt-4 hover:px-24 duration-100">
              Entrar
            </button>
          </div>
          <div className="flex justify-center items-center border-t-2 flex-col border-black dark:border-white dark:text-white text-black ">
          <h3 className='text-blue-primary mt-3'>Não possui uma conta?</h3>
            <Link
              href={'/account'}
              className="text-center btn-primary border-2 p-2 px-20 rounded-2xl border-blue-primary shadow-sm mt-4 hover:p-3 hover:px-24 duration-100"
            >
              Criar Conta
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
