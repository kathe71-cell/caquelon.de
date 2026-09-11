import React from 'react';

export default function CTAButton({ 
  children, 
  href = "#", 
  className = "",
  size = "default",
  variant = "primary"
}) {
  const baseClasses = "inline-flex items-center justify-center font-extrabold tracking-tight rounded-xl transition-all duration-300 transform active:scale-95 shadow-md hover:shadow-xl cursor-pointer";
  
  const variants = {
    primary: "bg-red-900 text-white hover:bg-red-800 shadow-red-900/20 border border-red-800",
    secondary: "bg-amber-400 text-stone-950 hover:bg-amber-300 shadow-amber-400/20 border border-amber-300 font-extrabold",
    outline: "border-2 border-red-900 text-red-950 bg-stone-50 hover:bg-red-900 hover:text-white",
    outlineLight: "border-2 border-white/60 text-white bg-white/10 hover:bg-white hover:text-stone-950 font-extrabold backdrop-blur-sm",
    dark: "bg-stone-900 text-white hover:bg-stone-800 border border-stone-700"
  };

  const sizes = {
    small: "px-5 py-2.5 text-xs md:text-sm",
    default: "px-7 py-3.5 text-sm md:text-base",
    large: "px-8 py-4 text-base md:text-lg"
  };

  const isInternal = href.startsWith("/") || href.startsWith("#");

  return (
    <a 
      href={href}
      className={`${baseClasses} ${variants[variant] || variants.primary} ${sizes[size] || sizes.default} ${className}`}
      {...(!isInternal ? { target: "_blank", rel: "noopener noreferrer nofollow" } : {})}
    >
      {children}
    </a>
  );
}