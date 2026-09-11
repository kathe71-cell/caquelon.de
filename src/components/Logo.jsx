import React from 'react';
import { ChefHat } from 'lucide-react';

export default function Logo({ className = "w-10 h-10" }) {
  return (
    <div className={`${className} bg-gradient-to-br from-red-900 to-red-700 rounded-xl flex items-center justify-center`}>
      <ChefHat className="w-6 h-6 text-white" />
    </div>
  );
}