import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Sneaker } from '../data/sneakers';

interface ProductCardProps {
  sneaker: Sneaker;
}

const ProductCard: React.FC<ProductCardProps> = ({ sneaker }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="aspect-square overflow-hidden bg-gray-50">
        <Link to={`/product/${sneaker.id}`}>
          <img
            src={sneaker.image}
            alt={sneaker.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Favorite Button */}
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-50">
          <Heart className="h-4 w-4 text-gray-600" />
        </button>

        {/* Featured Badge */}
        {sneaker.featured && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-sm text-gray-500 font-medium">{sneaker.brand}</p>
            <Link to={`/product/${sneaker.id}`}>
              <h3 className="font-semibold text-gray-900 hover:text-orange-600 transition-colors line-clamp-1">
                {sneaker.name}
              </h3>
            </Link>
          </div>
          <p className="text-lg font-bold text-gray-900">${sneaker.price}</p>
        </div>

        {/* Quick Add Button */}
        <Link
          to={`/product/${sneaker.id}`}
          className="w-full bg-black text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2 group"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Quick View</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;