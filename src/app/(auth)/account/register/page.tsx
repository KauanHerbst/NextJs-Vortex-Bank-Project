import CustomInput from '@/components/app/CustomInput/CustomInput';
import ToggleTheme from '@/components/app/ToggleTheme/ToggleTheme';
import VortexBank from '@/svgs/VortexBank/VortexBankSvg';
import Link from 'next/link';

export default function Register() {
  return (
    <section className="w-[100%] h-[100vh] flex">
      <div className="w-[350px] flex flex-col items-center max-lg:hidden">
        <div className="mt-8">
          <Link href={'/'}>
            <VortexBank width="230" height="230"></VortexBank>
          </Link>
        </div>
        <div>
          <h2 className="neue-regular text-3xl w-64 mt-20 max-xl:text-2xl max-xl:px-4">
            Seu <span className="text-blue-primary">banco</span> do
            <span className="text-blue-primary"> futuro</span> na sua mão
          </h2>
        </div>
        <div>
          <h2 className="neurial-regular text-3xl w-64 mt-28 max-xl:text-2xl max-xl:px-4">
            Certifique-se de inserir apenas dados fictícios e não reais.
          </h2>
          <div className=" max-xl:flex  max-xl:justify-center">
            <Link
              className="flex mt-10 max-xl:w-48 items-center justify-center text-center btn-primary border-2 p-2 rounded-2xl border-blue-primary shadow-sm shadow-blue-primary hover:bg-blue-primary"
              href={'/sobre'}
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-transparent w-[100%] border-black dark:border-white border-l-2 max-lg:border-0 max-md:h-[100vh]">
        <div className="h-32 border-b-2 border-black dark:border-white max-lg:h-[300px]">
          <div className="flex justify-center items-center flex-col mt-10">
            <h1 className="text-black dark:text-white neue-regular text-center text-3xl">
              Abra Sua Conta Na Vortex
            </h1>
            <div className="left-[40%] max-sm:top-10 relative">
              <ToggleTheme></ToggleTheme>
            </div>
          </div>
          <div className="hidden max-lg:flex max-lg:justify-center max-lg:flex-col max-lg:items-center">
            <h2 className="neurial-regular text-3xl w-64 max-xl:text-2xl max-xl:px-4 max-lg:text-lg text-center mt-5 text-black dark:text-white">
              Certifique-se de inserir apenas dados fictícios e não reais.
            </h2>
            <div className=" max-xl:flex  max-xl:justify-center">
              <Link
                className="flex  max-xl:w-48 items-center justify-center text-center btn-primary border-2 p-2 rounded-2xl border-blue-primary shadow-sm shadow-blue-primary hover:bg-blue-primary mt-5 text-black dark:text-white"
                href={'/sobre'}
              >
                Saiba Mais
              </Link>
            </div>
          </div>
          <div className="mt-14 max-md:mt-6">
            <h3 className="text-black dark:text-white text-2xl px-2 ">
              Insira seus dados
            </h3>
          </div>
        </div>
        <div className="p-10 bg-white dark:bg-transparent">
          <form className="flex justify-center">
            <div className="">
              <div className="flex max-md:flex-col max-md:justify-center max-md:items-center">
                <CustomInput
                  class="w-96 max-xl:w-56 mr-32 max-md:mr-0"
                  for="cpf"
                  text="CPF"
                  classLabel="right-[338px] max-xl:right-[180px]"
                  type="text"
                ></CustomInput>
                <CustomInput
                  class="w-96 max-xl:w-56 ml-24 max-md:ml-0 max-md:mt-16"
                  for="nomeCompleto"
                  text="Nome completo"
                  classLabel="right-[210px] max-xl:right-[48px]"
                  type="text"
                ></CustomInput>
              </div>
              <div className="flex max-md:flex-col max-md:justify-center max-md:items-center">
                <CustomInput
                  class="w-96 mt-24 max-xl:w-56 mr-32 max-md:mr-0"
                  for="dataNascimento"
                  text="Data de nascimento"
                  classLabel="right-[172px] max-xl:right-[12px]"
                  type="text"
                ></CustomInput>
                <CustomInput
                  class="w-96 mt-24 max-xl:w-56 ml-24 max-md:ml-0 max-md:mt-16"
                  for="celular"
                  text="Celular"
                  classLabel="right-[308px] max-xl:right-[150px]"
                  type="text"
                ></CustomInput>
              </div>
              <div className="flex max-md:flex-col max-md:justify-center max-md:items-center">
                <CustomInput
                  class="w-96 mt-24 max-xl:w-56 mr-32 max-md:mr-0"
                  for="email"
                  text="Email"
                  classLabel="right-[328px] max-xl:right-[168px]"
                  type="email"
                ></CustomInput>
                <CustomInput
                  class="w-96 mt-24 max-xl:w-56 ml-24 max-md:ml-0 max-md:mt-16"
                  for="confirmarEmail"
                  text="Confirmar Email"
                  classLabel="right-[210px] max-xl:right-[54px]"
                  type="email"
                ></CustomInput>
              </div>
              <div className="flex max-md:flex-col max-md:justify-center max-md:items-center">
                <div className="text-2xl mt-10 mr-0">
                  <div className="mt-5">
                    <input
                      type="checkbox"
                      className=" checked:bg-blue-primary shadow-md w-4 h-4"
                    ></input>
                    <label
                      htmlFor=""
                      className="ml-4 neurial-regular text-black dark:text-white text-base"
                    >
                      Aceitor receber novidades no Email.
                    </label>
                  </div>
                  <div className="mt-5 w-[400px] max-lg:w-[300px]">
                    <input
                      type="checkbox"
                      className=" checked:bg-blue-primary shadow-md w-4 h-4"
                    ></input>
                    <label
                      htmlFor=""
                      className="ml-4 neurial-regular  text-black dark:text-white text-base "
                    >
                      Autorizo A Vortex Bank a tratar os meus dados pessoais para envio de
                      comunicações sobre seus produtos e declaro que li e estou ciente da{' '}
                      {''}
                      <Link href={'/sobre'} className="text-blue-primary neurial-regular">
                        Política de Privacidade
                      </Link>
                    </label>
                  </div>
                </div>
                <div className="ml-24 max-xl:m-0 max-md:mr-10">
                  <button
                    className="flex mt-32 w-80 items-center text-2xl justify-center text-center text-black dark:text-white btn-primary border-2 p-3 rounded-3xl dark:border-white border-black shadow-md hover:p-4 duration-150 max-xl:w-64 max-xl:p-2 max-xl:hover:p-3 max-xl:ml-10 max-md:mt-8 "
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
