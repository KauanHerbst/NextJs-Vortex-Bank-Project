import ArrowUpWhiteSvg from '@/svgs/ArrowUpWhite/ArrowUpWhiteSvg';
import CardStandingSvg from '@/svgs/CardStanding/CardStandingSvg';
import Link from 'next/link';

function SectionCTACard() {
  return (
    <section className="bg-blue-primary mt-64 min-w-[300px] max-w-[1100px] p-5 flex justify-center ">
      <div className="flex justify-center items-center flex-col">
        <h3 className="neurial-regular text-2xl w-[278px]">
          Conta gratuita, cartão de crédito sem anuidade, empréstimo e muito mais
        </h3>
        <Link href={'/account'}>
          <div className="flex items-center justify-center text-center btn-primary border-2 p-2 px-4 rounded-2xl border-white shadow-sm mt-10 hover:p-3 hover:px-5 duration-100 ">
            <h3 className='mr-5'>Pedir Cartão</h3>
            <ArrowUpWhiteSvg width="30" height="30"></ArrowUpWhiteSvg>
          </div>
        </Link>
      </div>
      <div className="absolute ml-[700px] mt-[-140px] max-lg:hidden">
        <CardStandingSvg width="340" height="340"></CardStandingSvg>
      </div>
    </section>
  );
}

export default SectionCTACard;
