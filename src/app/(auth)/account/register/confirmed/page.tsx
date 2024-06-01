import ApprovedBlueSvg from '@/svgs/ApprovedBlueSvg/ApprovedBlueSvg';
import VortexBank from '@/svgs/VortexBank/VortexBankSvg';
import Link from 'next/link';

export default function Confirmed() {
  return (
    <main className="container flex justify-center items-center">
      <div>
        <div className="flex justify-center">
          <Link href={'/'}>
            <VortexBank width="300" height="300"></VortexBank>
          </Link>
        </div>
        <div className="flex justify-center mt-10">
          <ApprovedBlueSvg height="80" width="80"></ApprovedBlueSvg>
        </div>
        <div className="flex justify-center mt-16 w-96 text-justify max-sm:w-48 max-sm:ml-12">
          <h2 className="neurial-regular text-2xl">
            Seus dados foram enviados para analise e em breve entraremos em contato com
            você
          </h2>
        </div>
        <div className="flex justify-center">
          <Link
            className="w-56 flex items-center justify-center text-center btn-primary border-2 p-2 rounded-2xl border-blue-primary shadow-sm shadow-blue-primary hover:bg-blue-primary mt-16 text-white"
            href={'/login'}
          >
            Entrar
          </Link>
        </div>
      </div>
    </main>
  );
}
