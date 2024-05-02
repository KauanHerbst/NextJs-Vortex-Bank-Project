import ArrowUpSvg from '@/svgs/ArrowUp/ArrowUpSvg';
import VortexBankHorizontalSvg from '@/svgs/VortexBankHorizontal/VortexBankHorizontalSvg';
import Link from 'next/link';

function NotFound() {
  return (
    <section className="container flex flex-col">
      <div className="flex flex-col justify-center items-center">
        <div className="max-sm:hidden">
          <VortexBankHorizontalSvg width="500" height="450"></VortexBankHorizontalSvg>
        </div>
        <div className="sm:hidden">
          <VortexBankHorizontalSvg width="300" height="350"></VortexBankHorizontalSvg>
        </div>
        <div>
          <h1 className="neue-regular text-5xl text-center">
            ERROR 404 | NÃO ENCONTRADO
          </h1>
        </div>
        <div className="mt-48 md:w-[480px] ">
          <Link href={'/'}>
            <div className="flex items-center justify-center text-center btn-primary border-2 p-3 px-5 rounded-2xl border-blue-primary shadow-sm shadow-blue-primary hover:bg-blue-primary text-xl">
              <span className="mr-7">Ir Para Página Principal</span>
              <ArrowUpSvg width="30" height="30"></ArrowUpSvg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
