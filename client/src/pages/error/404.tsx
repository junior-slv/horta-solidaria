import React from 'react'
import HttpError from '@/components/httpErrors/HttpError';

const NotFound = () => {
  return (
    <HttpError
      title={"404"}
      subtitle={"PÁGINA NÃO ENCONTRADA"}
      message={"A página que você está procurando não existe."}
    ></HttpError>
  )
}

export default NotFound