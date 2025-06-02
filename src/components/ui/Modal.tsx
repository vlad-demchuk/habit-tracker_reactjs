import { useEffect, useRef } from 'react';

import { CloseButton } from '@/components';

import { ModalProps } from '@/types/modal.ts';

// TODO: use code splitting
export const Modal = ({ isOpen, closeModal, title, children }: ModalProps) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    // TODO: replace with useImperativeHandle
    if (isOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={ref}
      onCancel={closeModal}
      className="fixed top-1/2 -translate-y-1/2 mx-auto p-6 rounded-lg opacity-0 animate-[fadein_.2s_ease-in_forwards]"
    >
      <header className="flex justify-between mb-4">
        <h3 className="font-semibold text-3xl">{title}</h3>
        <CloseButton onClick={closeModal} />
      </header>

      <section className="aside-content">{children}</section>
    </dialog>
  );
};
