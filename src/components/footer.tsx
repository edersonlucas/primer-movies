import Image from 'next/image';
import Link from 'next/link';

import facebookLogo from '../assets/img/facebookLogo.svg';
import logoWhite from '../assets/img/logoWhite.svg';

import { InstagramLogo, TwitterLogo } from 'phosphor-react';

export default function Footer() {
  return (
    <footer className="w-full bg-primary p-4">
      <div className="flex flex-col items-center gap-4 md:mx-10 md:items-start">
        <Link href="/">
          <Image
            width={120}
            src={logoWhite}
            alt="Logo de um letreiro branco escrito LOGOIPSUM"
          />
        </Link>
        <hr className=" w-full border-white" />
        <div className="flex w-full flex-col-reverse items-center gap-4 md:flex-row md:justify-between">
          <div className="flex gap-2 text-xs text-white">
            <Link target="_blank" href="https://github.com/edersonlucas">
              <span>Terms & Conditions</span>
            </Link>
            <Link target="_blank" href="https://github.com/edersonlucas">
              <span>Privacy Policy</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link target="_blank" href="https://github.com/edersonlucas">
              <Image width={10} src={facebookLogo} alt="Logo do Facebook" />
            </Link>
            <Link target="_blank" href="https://github.com/edersonlucas">
              <TwitterLogo
                alt="Logo do Twitter"
                size={20}
                weight="fill"
                color="white"
              />
            </Link>
            <Link target="_blank" href="https://github.com/edersonlucas">
              <InstagramLogo alt="Logo do Instagram" size={20} color="white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
