import React, { createContext, FC, useState } from "react";

export type CartItemData = {
  name: string,
  priceUnits: number,
  priceCurrency: string,
  priceId: string,
  quantity: number,
  image?: string,
}
type CartItems = {[productId: string]: CartItemData};
interface FlattenedCartItem extends CartItemData {
  productId: string,
};

export type CartContextType = {
  items: CartItems,
  itemsArray: FlattenedCartItem[],
  addProduct: (id: string, item: CartItemData ) => void,
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
      ...cartProducts[id],
      productId: id,
    }));
  };

  const addProduct = (id: string, item: CartItemData): void => {
    const newCart = { ...cartProducts };
    if (Object.keys(newCart).includes(id)){
      const product = cartProducts[id];
      newCart[id] = {
        ...product,
        quantity: product.quantity + 1,
      }
    } else {
      newCart[id] = { ...item };
    }
    setCartProducts(newCart);
  };

  const removeProduct = (id: string): void => {
    const oldProduct = cartProducts[id]
    const oldProductCount = (oldProduct?.quantity || 0);
    const newCart = {...cartProducts};
    if (Object.keys(cartProducts).includes(id)){
      if (oldProductCount <= 1){
        delete newCart[id];
      } else {
        newCart[id] = {
          ...oldProduct,
          quantity: oldProductCount - 1
        };
      }
    }
    setCartProducts(newCart);
  };

  const contextValue = {
      items: cartProducts,
      itemsArray: getItemsAsArray(),
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
