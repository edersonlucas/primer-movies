import Image from 'next/image';
import Link from 'next/link';

import logo from '../assets/img/logo.svg';

export default function Header() {
  return (
    <header className="flex h-16 w-full justify-center bg-white p-4 md:justify-start">
      <Link href="/">
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
