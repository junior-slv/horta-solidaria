import React from 'react'
import HttpError from '@/components/httpErrors/HttpError';

const InternalServerError = () => {
  return (
    <HttpError
      title={"500"}
      subtitle={"ERRO INTERNO DO SERVIDOR"}
      message={"Estamos trabalhando na correção."}
    ></HttpError>
  )
}

export default InternalServerError