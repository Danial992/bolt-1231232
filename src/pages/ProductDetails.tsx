import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart, Star, Truck, Shield } from 'lucide-react';
import { sneakers } from '../data/sneakers';
import { useCart } from '../context/CartContext';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const sneaker = sneakers.find(s => s.id === parseInt(id || '0'));

  if (!sneaker) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <Link to="/catalog" className="text-orange-600 hover:text-orange-700 font-medium">
            Back to catalog
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;
    
    dispatch({
      type: 'ADD_TO_CART',
      payload: { sneaker, size: selectedSize }
    });
    
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/catalog"
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to catalog</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden">
              <img
                src={sneaker.images[selectedImage]}
                alt={sneaker.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {sneaker.images.length > 1 && (
              <div className="flex space-x-4">
                {sneaker.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-1 aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-orange-500' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${sneaker.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-2">{sneaker.brand}</p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{sneaker.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <p className="text-3xl font-bold text-gray-900">${sneaker.price}</p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">(4.8) 234 reviews</span>
                </div>
              </div>
            </div>

            <div className="prose text-gray-600">
              <p>{sneaker.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Select Size</h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                {sneaker.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 border rounded-lg font-medium transition-all ${
                      selectedSize === size
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-300 hover:border-gray-400 text-gray-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`w-full py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all ${
                  selectedSize
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>

              <button className="w-full py-4 px-6 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:border-gray-400 transition-colors flex items-center justify-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Add to Wishlist</span>
              </button>
            </div>

            {/* Success Message */}
            {showSuccess && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">Added to cart successfully!</p>
              </div>
            )}

            {/* Features */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">Free shipping on orders over $100</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">100% authentic guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">30-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;