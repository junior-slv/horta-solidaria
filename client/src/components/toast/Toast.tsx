import React, { useState } from "react";

const Torrada = () => {
  const [isClosed, setIsClosed] = useState(false)
  return (
    <div className={isClosed ? "hidden" : "block"}>
      <div className="absolute bottom-0 right-0 bg-white w-96 h-36 rounded-2xl flex items-center justify-center">
        <div>Sucesso!</div>
        <div className="absolute right-4 top-2">
          <button onClick={() => setIsClosed(!isClosed)}>X</button>
        </div>
      </div>
    </div>
  );
};

export default Torrada;
