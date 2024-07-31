import { postCheckout } from "../axios/checkout";
import { CartItemProps } from "../components/CartModal";
import { CartContextType, CartItemData } from "../context/CartContext";

export const useCart = (
  cartContex: CartContextType,
): {
  cartItems: CartItemProps[];
  cartCount: number,
  handleAddToCart: (id: string, item: CartItemData) => void;
  handleRemoveFromCart: (id: string) => void;
  handleCheckout: () => void;
} => {
  const {
    itemsArray,
    addProduct,
    removeProduct,
  } = cartContex;

  const cartCount = itemsArray.reduce<number>((acc, item) => (
    acc + item.quantity
  ), 0);

  const transformedCartItems: CartItemProps[] = itemsArray.map(item => ({
    id: item.productId,
    name: item.name,
    priceCurrency: item.priceCurrency,
    priceUnits: item.priceUnits,
    priceId: item.priceId,
    image: item.image,
    quantity: item.quantity,
  }));

  const handleAddToCart = (id: string, item: CartItemData) => {
    addProduct(id, item);
  };

  const handleRemoveFromCart = (id: string) => {
    removeProduct(id);
  };

  const handleCheckout = async () => {
    const lineItems = itemsArray.map(item => ({
      priceId: item.priceId,
      quantity: item.quantity,
    }))
    const { redirectUrl } = await postCheckout({lineItems});
    if (redirectUrl){
      window.location.replace(redirectUrl);
    }
  };

  return {
    cartItems: transformedCartItems,
    cartCount,
    handleAddToCart,
    handleRemoveFromCart,
    handleCheckout
  };
};
