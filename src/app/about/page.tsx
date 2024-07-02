import ArrowUpSvg from '@/svgs/ArrowUp/ArrowUpSvg';
import GithubSvg from '@/svgs/Github/GithubSvg';
import LinkedinSvg from '@/svgs/Linkedin/LinkedinSvg';
import VortexBank from '@/svgs/VortexBank/VortexBankSvg';
import Link from 'next/link';

export default function Sobre() {
  return (
    <main className='bg-purple-black-2 flex flex-col justify-center items-center'>
      <div>
        <VortexBank width="260" height="260"></VortexBank>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl neue-ultrabold'>Aviso Importante</h1>
        <p className='text-justify mt-5 neurial-regular text-2xl w-96 max-md:text-xl max-sm:w-72'>
          Este projeto foi desenvolvido exclusivamente para fins educativos e como parte
          de um portfólio de habilidades. Nenhum dado fornecido aqui será utilizado de
          verdade. Se você optar por adicionar qualquer informação, por favor,
          certifique-se de inserir apenas dados fictícios e não reais. Agradecemos a sua
          compreensão e colaboração.
        </p>
      </div>
      <div>
        <h2 className='neue-regular text-3xl mt-8 max-md:text-2xl max-sm:w-72'>Desenvolvido por: Kauan Herbst</h2>
        <div className=" flex justify-center items-center mt-4">
          <Link
            href={'https://github.com/KauanHerbst'}
            target="_blank"
            className="bg-blue-primary w-20 h-20 rounded-full flex justify-center items-center m-3 "
          >
            <GithubSvg width="50" height="50"></GithubSvg>
          </Link>
          <Link
            href={'https://www.linkedin.com/in/kauanherbst/'}
            target="_blank"
            className="bg-blue-primary w-20 h-20 rounded-full flex justify-center items-center m-3"
          >
            <LinkedinSvg width="50" height="50"></LinkedinSvg>
          </Link>
        </div>
      </div>
      <div className='mt-5'>
        <Link href={'/'}>
          <div className="flex items-center justify-center text-center btn-primary border-2 p-3 px-5 rounded-2xl border-blue-primary shadow-sm shadow-blue-primary hover:bg-blue-primary text-xl mb-10">
            <span className="mr-7">Ir Para Página Principal</span>
            <ArrowUpSvg width="30" height="30"></ArrowUpSvg>
          </div>
        </Link>
      </div>
    </main>
  );
}
