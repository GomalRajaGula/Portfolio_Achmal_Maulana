import { ReactNode } from 'react';

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  title?: string;
  subtitle?: ReactNode;
  description?: ReactNode;
  headerClassName?: string;
}

export default function SectionWrapper({ 
  id, 
  children, 
  className = '', 
  containerClassName = '',
  title,
  subtitle,
  description,
  headerClassName = 'mb-20'
}: Props) {
  return (
    <section 
      id={id} 
      className={`relative py-24 px-6 md:px-8 border-t border-white/[0.04] bg-[#09090B] ${className}`}
    >
      <div className={`mx-auto max-w-7xl ${containerClassName}`}>
        {(title || subtitle) && (
          <div className={`${headerClassName} flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 overflow-visible`}>
            <div className="max-w-3xl">
              {title && (
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500 flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-indigo-500" />
                  {title}
                </span>
              )}
              {subtitle && (
                <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white uppercase leading-[1]">
                  {subtitle}
                </h2>
              )}
            </div>
            {description && (
              <p className="max-w-md text-base md:text-lg text-zinc-400 leading-relaxed font-sans pb-4 lg:text-right">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
