import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import closeIcon from '@/assets/close-icon.svg';
import { SidebarProps } from '@/types/sidebar.ts';

export const Sidebar = ({ isOpen, onClose, title, children }: SidebarProps) => {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let container = document.getElementById('aside');

    if (!container) {
      container = document.createElement('div');
      container.id = 'aside';
      container.classList.add('aside');
      document.body.appendChild(container);
    }

    containerRef.current = container;

    return () => {
      if (!document.getElementById('aside')) {
        container?.parentElement?.removeChild(container);
      }
    };
  }, []);

  if (!containerRef.current || !isOpen) {
    return null;
  }

  const content = (
    <div className="aside-content-wrapper p-6">
      <header className="flex justify-between mb-3">
        <h3 className="font-semibold text-3xl">{title}</h3>
        <button onClick={onClose}>
          <img
            className="cursor-pointer hover:scale-125 transition-transform"
            src={closeIcon}
            alt="Close"
          />
        </button>
      </header>

      <section className="aside-content">{children}</section>
    </div>
  );

  return createPortal(
    content,
    containerRef.current,
  );
};
