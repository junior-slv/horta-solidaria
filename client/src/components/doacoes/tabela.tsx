import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";


function Tabela(){  
  return (
    <div className="rounded-lg mt-[40px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white rounded-lg">
      <table className="w-full">
        <thead className="bg-lightGray w-full">
          <tr className="h-[50px] rounded-lg">
            <th>
              <input type="checkbox" />
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
        <tbody>
          <tr>
            <td className="py-[20px]">
              <input type="checkbox" />
            </td>
            <td>João Gomes</td>
            <td>Maças</td>
            <td>10Kg</td>
            <td>30/03/2023</td>
            <td>
              <FontAwesomeIcon icon={faTrash} />{" "}
              <FontAwesomeIcon icon={faPenToSquare} />
            </td>
          </tr>
          <tr>
            <td className="py-[20px]">
              <input type="checkbox" />
            </td>
            <td>João Gomes</td>
            <td>Maças</td>
            <td>10Kg</td>
            <td>30/03/2023</td>
            <td className="text-lightGray">
              <FontAwesomeIcon icon={faTrash} />{" "}
              <FontAwesomeIcon icon={faPenToSquare} />
            </td>
          </tr>
          {/* footer */}
        </tbody>
        <tfoot className="bg-lightGray w-full h-[50px]">
          <tr>
            <td></td>
            <td>
              <button>Anterior</button>
            </td>
            <td></td>
            <td>
              <p>Página 1 de 10</p>
            </td>
            <td></td>
            <td>
              <button>Próxima</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Tabela;
