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
      const bounding = pageWrap.current.getBoundingClientRect();

      if (bounding.y <= 0) {
        page.current.style.position = 'fixed';
        page.current.style.top = '0';
        return;
      }
      page.current.style.position = 'relative';
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="page-wrap" ref={pageWrap} style={{ height }}>
      <div className="page" ref={page} style={style || {}}>
        {children}
      </div>
    </div>
  );
};
