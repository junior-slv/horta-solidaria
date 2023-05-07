import React from 'react'
import HttpError from '@/components/httpErrors/HttpError';

const Forbidden = () => {
  return (
    <HttpError
      title={"403"}
      subtitle={"ACESSO PROIBIDO"}
      message={"Acesso absolutamente proibido."}
    ></HttpError>
  )
}

export default Forbidden