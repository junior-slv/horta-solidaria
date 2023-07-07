import React, { useState } from 'react';

interface DeleteConfirmationModalProps {
  onDelete: () => void;
  isOpen: boolean;
  closeModal: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  onDelete,
  isOpen,
  closeModal,
}) => {
  const handleDelete = () => {
    onDelete();
    closeModal();
  };

  return (
    <div
      className={`fixed z-50 inset-0 flex items-center justify-center ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-off-white p-4 rounded shadow-lg">
          <div className="text-center mb-4"><h2 className='font-bold'>Tem certeza que deseja deletar?</h2> <p>Essa ação é irreversível</p></div>
          <div className="flex justify-center">
            <button
              className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleDelete}
            >
              Sim
            </button>
            <button
              className="bg-lightBlue hover:bg-darkBlue text-white font-bold py-2 px-4 rounded"
              onClick={closeModal}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
