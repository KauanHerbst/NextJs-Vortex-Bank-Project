import ArrowUpSvg from '@/svgs/ArrowUp/ArrowUpSvg';
import Image from 'next/image';
import Link from 'next/link';

function SectionFeedback() {
  return (
    <section className="container flex flex-col">
      <div className="mt-72">
        <h2 className="text-5xl neue-regular">Feedbacks</h2>
        <p className="mt-5 neurial-regular text-xl text-white-black-primary">
          Clientes satisfeitos todos os dias
        </p>
      </div>
      <div className="flex mt-8 max-md:flex-col justify-center items-center">
        <div className="flex-item-1 max-md:justify-center max-md:items-center max-md:mt-10">
          <h3 className="text-3xl neue-regular w-64">+50 Milhões de Clientes</h3>
          <p className="m-5 neurial-regular text-xl text-white-black-primary max-md:w-72 ">
            Diversos clientes estão satisfeitos por utilizar nosso banco diariamente.
            Venha criar sua conta agora mesmo.
          </p>
          <Link
            href={'/account'}
            className="flex items-center justify-center text-center btn-primary border-2 p-2 rounded-2xl border-blue-primary shadow-sm shadow-blue-primary hover:bg-blue-primary text-xl mt-8 w-64"
          >
            <h2 className="mr-8">Seja Vortex</h2>
            <ArrowUpSvg width="30" height="30"></ArrowUpSvg>
          </Link>
        </div>
        <div className="flex-item-2">
          <div className="flex max-xl:flex-col">
            <div className="flex flex-col justify-center bg-purple-black-primary border-l-8 border-blue-black-2 border-t-2 border-b-2 border-r-2 rounded-md p-2 w-[356px] shadow-md shadow-blue-primary">
              <div className="flex">
                <div className="w-[112px] h-28" id='people-one'></div>
                <div className="flex flex-col items-center">
                  <div className="text-lg text-blue-white-2 neurial-regular">
                    Comentário
                  </div>
                  <div className="text-2xl mt-2 ml-4">Júlia Amorim</div>
                </div>
              </div>
              <div className="p-4">
                <p className="neurial-regular text-xl text-white-black-primary">
                  O banco oferece ótimas taxas e condições em seus empréstimos individuais
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center bg-purple-black-primary border-l-8 border-blue-black-2 border-t-2 border-b-2 border-r-2 rounded-md p-2 w-[356px] shadow-md shadow-blue-primary ml-8 max-xl:ml-0 max-xl:mt-6">
              <div className="flex">
                <div className="w-[112px] h-28" id='people-two'></div>
                <div className="flex flex-col items-center">
                  <div className="text-lg text-blue-white-2 neurial-regular">
                    Comentário
                  </div>
                  <div className="text-2xl mt-2 ml-4">Roberto Silva</div>
                </div>
              </div>
              <div className="p-4">
                <p className="neurial-regular text-xl text-white-black-primary">
                  Excelente banco! Sempre confiável e com soluções financeiras práticas
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-6 max-xl:flex-col ">
            <div className="flex flex-col justify-center bg-purple-black-primary border-l-8 border-blue-black-2 border-t-2 border-b-2 border-r-2 rounded-md p-2 w-[356px] shadow-md shadow-blue-primary">
              <div className="flex">
                <div className="w-[112px] h-28" id='people-three'></div>
                <div className="flex flex-col items-center">
                  <div className="text-lg text-blue-white-2 neurial-regular">
                    Comentário
                  </div>
                  <div className="text-2xl mt-2 ml-4">Lucas Oliveira</div>
                </div>
              </div>
              <div className="p-4">
                <p className="neurial-regular text-xl text-white-black-primary">
                  Serviço impecável! Nunca tive problemas e o atendimento é sempre rápido
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center bg-purple-black-primary border-l-8 border-blue-black-2 border-t-2 border-b-2 border-r-2 rounded-md p-2 w-[356px] shadow-md shadow-blue-primary ml-8 max-xl:ml-0 max-xl:mt-6">
              <div className="flex">
                <div className="w-[112px] h-28" id='people-four'></div>
                <div className="flex flex-col items-center">
                  <div className="text-lg text-blue-white-2 neurial-regular">
                    Comentário
                  </div>
                  <div className="text-2xl mt-2 ml-4">Sofia Santos</div>
                </div>
              </div>
              <div className="p-4">
                <p className="neurial-regular text-xl text-white-black-primary">
                  Simplesmente adoro este banco! As taxas são justas e o aplicativo é
                  super intuitivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFeedback;
