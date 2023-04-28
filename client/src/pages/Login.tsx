import React from 'react'


const Login = () => {
  return (
    <div className='w-screen h-screen flex items-centes justify-center bg-darkGreen'>
      <div className='w-80'>

        <form className='bg-beige shadow-md rounded-md p-6 space-y-4'>

          <div>
            <label htmlFor="user" className='block font-poppins text-sm mb-1 text-lightGreen'>Usuário</label>
            <input type="text" className="w-full bg-white border border-gray focus:border-lightGreen rounded px-3 py-2 text-base text-black placeholder-black focus:outline-none transition duration-200 ease-in-out" />
          </div>

          <div>
            <label htmlFor="password" className='block font-poppins text-sm mb-1 text-lightGreen'>Senha</label>
            <input type="password" className="w-full bg-white border border-gray focus:border-lightGreen rounded px-3 py-2 text-base text-black placeholder-black focus:outline-none transition duration-200 ease-in-out" />
          </div>

          <div>
            <button className="w-full text-sm bg-darkGreen hover:bg-lightGreen px-6 py-2 rounded text-white shadow">Entrar</button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default Login