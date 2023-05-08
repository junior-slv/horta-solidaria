import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Data }  from "./dados";

function Tabela(){  

  return (
    <div className="rounded-lg mt-[40px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white rounded-lg">
      {/* Tabela */}
      <table className="w-full">
        {/* Cabeçalho Tabela */}
        <thead className="bg-lightGray w-full">
          <tr className="h-[50px] rounded-lg">
            <th>
              <input type="checkbox" className="scale-x-150 scale-y-150	"/>
            </th>
            <th>
              Doador{" "}
              <span className="ml-[10px]">
                <FontAwesomeIcon icon={faArrowDown} />
              </span>
            </th>
            <th>
              Produto{" "}
              <span className="ml-[10px]">
                <FontAwesomeIcon icon={faArrowDown} />
              </span>
            </th>
            <th>
              Quantidade{" "}
              <span className="ml-[10px]">
                <FontAwesomeIcon icon={faArrowDown} />
              </span >
            </th>
            <th>
              Data{" "}
              <span className="ml-[10px]">
                <FontAwesomeIcon icon={faArrowDown} />
              </span>
            </th>
            <th>
              Edição{" "}
              <span className="ml-[10px]"> 
                <FontAwesomeIcon icon={faArrowDown} />
              </span>
            </th>
          </tr>
        </thead>
        {/* Fim cabeçalho */}
        <tbody>
        {Data.map((item, index) => (
          <tr key={index}>
            <td className="py-[20px]">
              <input type="checkbox" className="scale-x-150 scale-y-150	"/>
            </td>
            <td>{item.doador} </td>
            <td>{item.produto} </td>
            <td>{item.quantidade} </td>
            <td>{item.data} </td>
            <td>
              <FontAwesomeIcon icon={faTrash} className="mr-[20px]"/>{" "}
              <FontAwesomeIcon icon={faPenToSquare} />
            </td>
          </tr>
        ))}
      </tbody>
        <tfoot className="bg-lightGray w-full h-[50px]">
          <tr>
            <td></td>
            <td>
              <button className="outline rounded-[8px] py-1.5 px-1.5 font-medium outline-black hover:text-sm">Anterior</button>
            </td>
            <td></td>
            <td>
              <p>Página 1 de 10</p>
            </td>
            <td></td>
            <td>
              <button className="outline rounded-[8px] py-1.5 px-1.5 font-medium outline-black hover:text-sm" >Próxima</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Tabela;
