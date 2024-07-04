import Card from '@/components/app/Card/Card';
import UndrawCardSvg from '@/svgs/UndrawCardSvg/UndrawCardSvg';

export default function Wallet() {
  return (
    <div className="w-[100%] h-[100%] flex md:justify-center md:items-center bg-white dark:bg-purple-black-2">
      <div className="w-[1140px] flex md:justify-center gap-12 max-lg:gap-5 max-md:flex-col max-md:items-center max-md:mt-24">
        <Card class="w-[720px] h-[620px] max-md:w-[90%] max-sm:h-[720px]">
          <div className="flex flex-col justify-center items-center neurial-regular">
            <div className='mt-4'>
              <UndrawCardSvg width="260" height="260"></UndrawCardSvg>
            </div>
            <div className='flex flex-col justify-center items-center gap-5 mt-10'>
              <h2 className="text-black text-2xl">Adicione conta bancária</h2>
              <p className="text-black text-justify w-[390px] text-xl max-sm:w-[220px]">
                Junte-se aos milhões de clientes que usam o Vortex Bank para pagar compras
                todos os dias, a qualquer momento, em qualquer lugar.
              </p>
              <button className="bg-blue-primary rounded-lg px-16 py-2 shadow-xl hover:bg-blue-black-2 duration-150 text-white neurial-bold mt-8">
                Adicione Conta
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
