import * as React from 'react';

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
}

export function RainbowButton({
  children,
  className = '',
  href,
  ...props
}: RainbowButtonProps) {
  if (href) {
    return (
      <a href={href} className={`rainbow-button ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`rainbow-button ${className}`} {...props}>
      {children}
    </button>
  );
}
