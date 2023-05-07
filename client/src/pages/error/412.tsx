import React from 'react'
import HttpError from '@/components/httpErrors/HttpError'

const PreconditionFailed = () => {
  return (
    <HttpError
      title={"412"}
      subtitle={"FALHA NA PRÉ-CONDIÇÂO"}
      message={"Acesso ao recurso especificado foi negado."}
    ></HttpError>
  )
}

export default PreconditionFailed