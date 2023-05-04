import Image from 'next/image';
import Link from 'next/link';

import logo from '../assets/img/logo.svg';

export default function Header() {
  return (
    <header className="fixed top-0 z-50 flex h-16 w-full justify-center bg-white p-4 md:justify-start">
      <Link className="my-auto" href="/">
        <Image
          priority={true}
          className="md:mx-10"
          width={120}
          src={logo}
          alt="Logo de um letreiro escrito LOGOIPSUM"
        />
      </Link>
    </header>
  );
}
