import * as React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-medium transition-all',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          // Variant styles
          variant === 'primary' &&
            'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))]/90 rounded-[var(--radius-button)] shadow-sm',
          variant === 'secondary' &&
            'bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary))]/80 rounded-[var(--radius-button)]',
          variant === 'outline' &&
            'border border-[hsl(var(--border))] bg-transparent hover:bg-[hsl(var(--accent))] text-[hsl(var(--foreground))] rounded-[var(--radius-button)]',
          variant === 'ghost' &&
            'hover:bg-[hsl(var(--accent))] text-[hsl(var(--foreground))] rounded-[var(--radius-input)]',
          // Size styles
          size === 'sm' && 'text-sm px-4 py-2 h-9',
          size === 'md' && 'text-[15px] px-6 py-2.5 h-11',
          size === 'lg' && 'text-base px-8 py-3 h-12',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
