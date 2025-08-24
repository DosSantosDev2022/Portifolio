import { cn } from '@/lib/utils';
import type { ElementType, ReactNode } from 'react';

/**
 * Interface para as propriedades do componente Heading.
 *
 * @interface IHeadingProps
 * @property {ElementType} as - A tag HTML do heading (ex: 'h1', 'h2').
 * @property {ReactNode} children - O conteúdo do heading.
 * @property {string} [className] - Classes de estilo adicionais.
 */
interface IHeadingProps {
  as: ElementType;
  children: ReactNode;
  className?: string;
}

/**
 * Um componente de heading genérico que renderiza diferentes tags HTML
 * com estilos pré-definidos baseados no tipo de heading.
 *
 * @param {IHeadingProps} props - As propriedades do componente.
 * @returns {JSX.Element} Um elemento de heading renderizado.
 */
export function Heading({ as: Comp, children, className }: IHeadingProps): JSX.Element {
  const baseStyles = 'font-bold text-foreground tracking-tight';

  const headingStyles = {
    h1: 'text-3xl lg:text-5xl xl:text-6xl',
    h2: 'text-2xl lg:text-4xl xl:text-5xl',
    h3: 'text-xl lg:text-3xl xl:text-4xl',
    h4: 'text-lg lg:text-2xl xl:text-3xl',
    h5: 'text-base lg:text-xl xl:text-2xl',
    h6: 'text-sm lg:text-lg xl:text-xl',
  };

  const finalClassName = cn(
    baseStyles,
    headingStyles[Comp as keyof typeof headingStyles],
    className
  );

  return <Comp className={finalClassName}>{children}</Comp>;
}