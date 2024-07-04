import Card from '@/components/app/Card/Card';
import UndrawPlainCardSvg from '@/svgs/UndrawPlainCardSvg/UndrawPlainCardSvg';

export default function Cards() {
  return (
    <div className="w-[100%] h-[100%] flex md:justify-center md:items-center bg-white dark:bg-purple-black-2">
      <div className="w-[1140px] flex md:justify-center max-md:flex-col max-md:items-center max-md:mt-24 ">
        <Card class="w-[720px] h-[620px] max-md:w-[90%] max-sm:h-[670px]">
          <div className='neurial-regular flex flex-col justify-center items-center'>
            <div>
              <UndrawPlainCardSvg width="280" height="280"></UndrawPlainCardSvg>
            </div>
            <div className='flex flex-col justify-center items-center gap-5 mt-5'>
              <h2 className='text-black text-2xl'>Peça seu cartão Vortex</h2>
              <p className='text-black text-xl text-justify w-[390px] max-sm:w-[270px]'>
                Junte-se aos milhões de clientes que usam o Vortex Bank para pagar compras
                todos os dias, a qualquer momento, em qualquer lugar.
              </p>
            </div>
            <div>
              <button className="bg-blue-primary rounded-lg px-16 py-2 shadow-xl hover:bg-blue-black-2 duration-150 text-white neurial-bold mt-8">
                Peça seu Cartão
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
