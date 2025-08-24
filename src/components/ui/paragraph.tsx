import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

/**
 * Interface para as propriedades do componente Paragraph.
 *
 * @interface IParagraphProps
 * @property {ReactNode} children - O conteúdo do parágrafo.
 * @property {string} [className] - Classes de estilo adicionais.
 */
interface IParagraphProps {
  children: ReactNode;
  className?: string;
}

/**
 * Um componente de parágrafo genérico que aplica estilos padrão
 * e permite customização via className.
 *
 * @param {IParagraphProps} props - As propriedades do componente.
 * @returns {JSX.Element} Um elemento de parágrafo renderizado.
 */
export function Paragraph({ children, className }: IParagraphProps): JSX.Element {
  const baseStyles = 'leading-relaxed text-base text-muted-foreground';

  const finalClassName = cn(baseStyles, className);

  return <p className={finalClassName}>{children}</p>;
}