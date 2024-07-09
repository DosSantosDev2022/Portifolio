'use client'

import { useState } from 'react'
import { Button } from '@/components/global/uiChroma/button'
import { RiArrowRightUpLine } from 'react-icons/ri'
import { ModalForm } from '@/components/global/uiChroma/ModalForm'

export default function Modal() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal)
  }
  return (
    <>
      <Button
        className="flex items-center gap-3 rounded-3xl bg-highlights px-5 py-2 duration-300 hover:bg-highlights_hover "
        onClick={handleOpenModal}
        variant="highlight"
      >
        Contato
        <i className="rounded-full bg-light p-2 duration-300 hover:scale-105">
          <RiArrowRightUpLine size={18} className="text-secundary" />
        </i>
      </Button>

      {isOpenModal ? (
        <div className="fixed left-0 right-0 top-0 z-50 flex   max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-zinc-900/50 md:inset-0 ">
          <div className="relative max-h-full w-full max-w-xl p-4">
            {/* Modal content */}

            <div className="relative rounded-lg bg-secundary shadow ">
              {/* Modal Header */}

              <div className="flex items-center justify-between rounded-t border-b border-lightSilver/30 p-4 md:p-5 ">
                <h3 className="text-lg font-semibold  lg:text-xl">
                  Vamos fechar uma parceria ?
                </h3>
                <Button
                  variant="highlight"
                  onClick={handleOpenModal}
                  type="button"
                  className="ms-auto flex h-8 w-8 items-center justify-center rounded-lg "
                >
                  <svg
                    className="h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </Button>
              </div>

              {/*  Modal body */}
              <div className="w-full p-4">
                <ModalForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
