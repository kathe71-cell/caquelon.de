import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users } from 'lucide-react';

export default function RecipeCard({ 
  title, 
  description, 
  category, 
  cookTime, 
  servings, 
  difficulty, 
  linkTo 
}) {
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Käsefondue': return 'bg-amber-100 text-amber-800';
      case 'Fleischfondue': return 'bg-red-100 text-red-800';
      case 'Vegan': return 'bg-green-100 text-green-800';
      case 'Dessert': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link 
      to={linkTo} 
      onClick={scrollToTop}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
            {category}
          </span>
          <span className="text-sm font-medium text-gray-500">{difficulty}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-900 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{servings}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}