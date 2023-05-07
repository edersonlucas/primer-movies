import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Header from 'components/header';

import Illustration404 from '../assets/img/Illustration404.svg';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Página Não Encontrada</title>
      </Head>
      <main className="m-auto h-screen w-full max-w-[1920px] bg-primary text-white">
        <Header />
        <section className="flex h-full w-full transform items-center justify-center gap-4 px-4 pt-16">
          <div className="flex min-h-[450px] max-w-[450px] flex-col items-center justify-center gap-8 rounded-md bg-secondary p-4">
            <h1 className="text-6xl font-bold">404</h1>
            <h2 className="text-2xl font-semibold">
              A página que você está procurando não existe.
            </h2>
            <p className="text-base">
              Você pode ter digitado incorretamente o endereço ou a página pode
              ter sido movida.
            </p>
            <Link
              className="w-full rounded-lg bg-white p-3 text-center text-sm font-medium text-primary hover:bg-primary hover:text-white"
              href={'/movies/1'}
            >
              VÁ PARA A PÁGINA DE FILMES
            </Link>
          </div>
          <div className="hidden md:flex md:min-w-[450px]">
            <Image
              priority={true}
              width={500}
              src={Illustration404}
              alt="Ilustração de pagina não encontrada com um 404"
            />
          </div>
        </section>
      </main>
    </>
  );
}
