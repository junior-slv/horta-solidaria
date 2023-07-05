import React from 'react'

const teste = () => {
  return (
<div className="container mx-auto p-4">
  <h1 className="text-2xl font-bold mb-4">Meu Formulário</h1>
  <form>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input1">Input 1</label>
      <input className="border rounded px-3 py-2 w-full" type="text" id="input1" name="input1"/>
    </div>
    
    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="radio1">Radio 1</label>
      <div>
        <label className="inline-flex items-center">
          <input type="radio" className="form-radio text-blue-500" name="radio1" value="option1"/>
          <span className="ml-2">Opção 1</span>
        </label>
        <label className="inline-flex items-center ml-6">
          <input type="radio" className="form-radio text-blue-500" name="radio1" value="option2"/>
          <span className="ml-2">Opção 2</span>
        </label>
      </div>
    </div>
    
    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="select1">Select 1</label>
      <select className="border rounded px-3 py-2 w-full" id="select1" name="select1">
        <option value="">Selecione uma opção</option>
        <option value="option1">Opção 1</option>
        <option value="option2">Opção 2</option>
        <option value="option3">Opção 3</option>
      </select>
    </div>
    
    
    <div className="flex justify-end">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Enviar</button>
    </div>
  </form>
</div>

  )
}

export default teste