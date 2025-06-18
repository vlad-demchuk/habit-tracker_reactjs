import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { CloseButton } from '@/components';

import { SidebarProps } from '@/types/sidebar.types.ts';

export const Sidebar = ({
  isOpen,
  onClose,
  title = 'Title',
  children,
}: SidebarProps) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    let container = document.getElementById('aside');

    if (!container) {
      container = document.createElement('div');
      container.id = 'aside';
      container.classList.add('aside');
      document.body.appendChild(container);
    }

    containerRef.current = container;
    setIsMounted(true);

    return () => {
      if (!document.getElementById('aside')) {
        container?.parentElement?.removeChild(container);
      }
    };
  }, []);

  if (!isMounted || !containerRef.current || !isOpen) {
    return null;
  }

  const content = (
    <div className="aside-content-wrapper p-6">
      <header className="flex justify-between mb-3">
        <h3 className="font-semibold text-3xl">{title}</h3>
        <CloseButton onClick={onClose} />
      </header>

      <section className="aside-content">{children}</section>
    </div>
  );

  return createPortal(content, containerRef.current);
};
