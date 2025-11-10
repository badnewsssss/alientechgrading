import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  gradient?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, gradient = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl shadow-card p-6 bg-white dark:bg-gray-800',
          hover && 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
          gradient && 'bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
