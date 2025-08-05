import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Sneaker } from '../data/sneakers';

export interface CartItem {
  id: number;
  sneaker: Sneaker;
  size: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: { sneaker: Sneaker; size: number } }
  | { type: 'REMOVE_FROM_CART'; payload: { id: number; size: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; size: number; quantity: number } }
  | { type: 'CLEAR_CART' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { sneaker, size } = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.sneaker.id === sneaker.id && item.size === size
      );

      let newItems;
      if (existingItemIndex >= 0) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...state.items, { id: Date.now(), sneaker, size, quantity: 1 }];
      }

      const total = newItems.reduce((sum, item) => sum + item.sneaker.price * item.quantity, 0);
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case 'REMOVE_FROM_CART': {
      const { id, size } = action.payload;
      const newItems = state.items.filter(
        item => !(item.sneaker.id === id && item.size === size)
      );

      const total = newItems.reduce((sum, item) => sum + item.sneaker.price * item.quantity, 0);
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case 'UPDATE_QUANTITY': {
      const { id, size, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_FROM_CART', payload: { id, size } });
      }

      const newItems = state.items.map(item =>
        item.sneaker.id === id && item.size === size
          ? { ...item, quantity }
          : item
      );

      const total = newItems.reduce((sum, item) => sum + item.sneaker.price * item.quantity, 0);
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0, itemCount: 0 };

    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};