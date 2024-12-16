import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      onClick?.();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-gray-200 hover:text-white transition-colors px-3 py-2"
    >
      {children}
    </a>
  );
}

export function NavLinks({ onItemClick }: { onItemClick?: () => void }) {
  return (
    <>
      <NavLink href="#home" onClick={onItemClick}>Home</NavLink>
      <NavLink href="#itineraries" onClick={onItemClick}>Itineraries</NavLink>
      <NavLink href="#testimonials" onClick={onItemClick}>Testimonials</NavLink>
      <NavLink href="#contact" onClick={onItemClick}>Contact</NavLink>
    </>
  );
}