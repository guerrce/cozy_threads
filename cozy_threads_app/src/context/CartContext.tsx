import React, { createContext, FC, useContext, useState } from "react";

type CartItems = {[productId: string]: number};
type FlattenedCartItem = {id: string, quantity: number}
export type CartContextType = {
  items: CartItems,
  getItemsAsArray: () => FlattenedCartItem[],
  addProduct: (id: string, quantity: number) => void,
  removeProduct: (id: string) => void,
};

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider: FC<{
  children: React.ReactNode
}> = ({
  children
}) => {
  const [cartProducts, setCartProducts] = useState<CartItems>({});

  const getItemsAsArray = (): FlattenedCartItem[] => {
    return Object.keys(cartProducts).map(id => ({
      id,
      quantity: cartProducts[id]
    }));
  };

  const addProduct = (id: string, quantity: number): void => {
    const newProductCount = (cartProducts[id] || 0) + quantity;
    const newCart = {
      ...cartProducts,
      [id]: newProductCount,
    }
    setCartProducts(newCart);
  };

  const removeProduct = (id: string): void => {
    const oldProductCount = (cartProducts[id] || 0);
    const newCart = {...cartProducts};
    if (Object.keys(cartProducts).includes(id)){
      if (oldProductCount <= 1){
        delete newCart[id];
      } else {
        newCart[id] = oldProductCount - 1;
      }
    }
    setCartProducts(newCart);
  };

  const contextValue = {
      items: cartProducts,
      getItemsAsArray,
      addProduct,
      removeProduct,
  };

  return (
    <CartContext.Provider value={contextValue}>
      { children }
    </CartContext.Provider>
  )
}

export default CartProvider;
