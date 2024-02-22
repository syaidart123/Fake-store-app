import React from "react";

const Modal = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <div className="absolute top-2 right-2">
          <button
            onClick={onClose}
            className="text-sm px-2 py-1 bg-gray-300 text-gray-400 hover:bg-gray-400 hover:text-gray-800"
          >
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
