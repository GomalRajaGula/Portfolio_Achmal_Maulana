import { ReactNode } from 'react';

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function SectionWrapper({ id, children, className = '', containerClassName = '' }: Props) {
  return (
    <section 
      id={id} 
      className={`relative py-24 px-6 md:px-8 border-t border-white/[0.04] bg-[#09090B] ${className}`}
    >
      <div className={`mx-auto max-w-7xl ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
