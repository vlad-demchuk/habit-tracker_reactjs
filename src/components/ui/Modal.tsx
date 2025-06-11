import { useEffect, useRef } from 'react';

import { CloseButton } from '@/components';

import { ModalProps } from '@/types/modal.ts';

export const Modal = ({ isOpen, closeModal, title, children }: ModalProps) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeModal]);

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
