"use client";

import React from "react";
import ReactModal from "react-modal";
import { X } from "lucide-react";

if (typeof document !== "undefined") {
  const appElement = document.getElementById("app-root");

  if (!appElement) {
    throw new Error('The modal requires an element with id="app-root".');
  }

  ReactModal.setAppElement(appElement);
}

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  children,
  title,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title ?? "Modal"}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl outline-none"
      overlayClassName="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-900/50 p-4"
    >
      <header
        className={`mb-5 flex items-center gap-4 ${
          title ? "justify-between" : "justify-end"
        }`}
      >
        {title && (
          <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        )}
        <button
          type="button"
          onClick={onRequestClose}
          aria-label="Fechar modal"
          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          <X size={20} aria-hidden="true" />
        </button>
      </header>
      {children}
    </ReactModal>
  );
};

export default Modal;
