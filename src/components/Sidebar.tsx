import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';

export const Sidebar = ({ isOpen, onClose, children }: {
  isOpen: boolean,
  onClose: () => void,
  children: React.ReactNode
}) => {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
  console.log('render');

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
    <div className="aside-content">
      {isOpen && (
        <>
          <button onClick={onClose}>X</button>
          {children}
        </>

      )}
    </div>
  );

  return createPortal(
    content,
    containerRef.current,
  );
};
