import React from 'react'
import { Botao } from "../../components/buttons/Botao";
import Router, { useRouter } from "next/router";
import LargeButton from "@/components/buttons/LargeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const Forbidden = () => {
  return (
    <div className="w-screen h-screen font-poppins flex items-stretch items-centes justify-center bg-darkGreen select-none">
      <form className="bg-beige shadow-md rounded-md p-12 space-y-5 w-[36rem] h-[37rem] self-center block">
        <p className='gap-3 text-center flex flex-col items-stretch items-center justify-center font-bold text-4xl mb-1 text-black select-none'>
          Ops!
          <FontAwesomeIcon icon={faTriangleExclamation} className='flex text-9xl text-yellow' />
        </p>
        <p className='flex items-stretch justify-center font-bold text-8xl mb-1 text-black select-none'>
          403
        </p>
        <p className='flex items-stretch items-center justify-center font-bold text-3xl mb-1 text-black select-none'>
          ACESSO PROIBIDO
        </p>
        <p className='flex items-stretch items-center justify-center text-xl mb-1 text-black select-none'>
          Acesso absolutamente proibido.
        </p>
        <div className="relative top-[22px]"> 
        {/* Arrumar botão voltar! */}
          <LargeButton onClick={() => Router.push("../")}>
            Voltar
          </LargeButton>
        </div>
      </form>
    </div>
  )
}

export default Forbidden