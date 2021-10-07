import React, { ReactNode, useEffect, useRef } from 'react';

interface PageProps {
  children: ReactNode;
  height?: string;
  style?: React.CSSProperties;
}
export const Page: React.FC<PageProps> = ({
  children,
  style,
  height = '100vh',
}) => {
  const page = useRef<HTMLDivElement>(null);
  const pageWrap = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (!pageWrap.current || !page.current) return;
      const bounding = pageWrap.current.getBoundingClientRect();

      if (bounding.y <= 0) {
        page.current.style.position = 'fixed';
        page.current.style.top = '0px';
        return;
      }
      page.current.style.position = 'relative';
    };
    document.addEventListener('scroll', () => onScroll());
    return () => document.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="relative w-screen" ref={pageWrap} style={{ height }}>
      <div className="relative w-full h-full" ref={page} style={style || {}}>
        {children}
      </div>
    </div>
  );
};
