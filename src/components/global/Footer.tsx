import { bebas } from '@/app/fonts'
import { Form } from './Form/Form'
import { FaPhoneVolume, FaGithub, FaInstagram } from 'react-icons/fa6'
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

import { MdAttachEmail } from 'react-icons/md'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex flex-col border-t-[1px] border-zinc-700 lg:px-20 lg:py-20">
      <div className="flex w-full flex-col px-4 py-4 lg:flex-row">
        <div className="flex w-full flex-col">
          <h3
            className={` ${bebas.className} text-4xl font-normal leading-[76px] text-light lg:text-7xl`}
          >
            Entre em Contato
          </h3>
          <div className=" mt-4 flex flex-col gap-2 text-lg font-light leading-7 text-lightSilver lg:mb-0">
            <span className="flex items-center gap-2">
              <MdAttachEmail />
              dossantosdevoficial@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <FaPhoneVolume />
              (11) 91645-3897
            </span>
          </div>
          <div className="mb-10 mt-5 flex items-center gap-8 lg:mb-0">
            <Link
              target="_blank"
              className="text-3xl text-lightSilver"
              href={'https://www.linkedin.com/in/dossantosdev/'}
            >
              <FaLinkedinIn />
            </Link>
            <Link
              target="_blank"
              className="text-3xl text-lightSilver"
              href={'https://github.com/DosSantosDev2022'}
            >
              <FaGithub />
            </Link>
            <Link
              target="_blank"
              className="text-3xl text-lightSilver"
              href={'https://www.instagram.com/julianosantosdev/'}
            >
              <FaInstagram />
            </Link>

            <Link
              target="_blank"
              className="text-3xl text-lightSilver"
              href={
                'https://wa.me/+5511916453897?text=Ol%C3%A1,%20quero%20conhecer%20mais%20do%20seu%20trabalho,%20podemos%20conversar%20? '
              }
            >
              <FaWhatsapp />
            </Link>
          </div>
        </div>

        <Form />
      </div>
      <div className="mt-10 flex w-full items-center justify-center border-t-[1px] border-zinc-800 p-2">
        <span className="font-light leading-[25.6px] text-lightSilver ">
          © 2024 Juliano Santos
        </span>
      </div>
    </footer>
  )
}
