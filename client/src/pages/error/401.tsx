import React from "react";
import HttpError from "@/components/httpErrors/HttpError";

const Unauthorized = () => {
  return (
    <HttpError
      title={"401"}
      subtitle={"ACESSO NEGADO"}
      message={"Permissão negada para acessar essa página."}
    ></HttpError>
  );
};

export default Unauthorized;
